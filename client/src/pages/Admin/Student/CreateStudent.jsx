import React, { useState, useEffect } from "react";
import Axios from 'axios';
import * as C from "../styles";
import GlobalStyle from "../styles"
import Button from '../../../components/Button';
import Loader from "../../../components/Loaders";

const CreateStudent = () => {
    const url = 'http://localhost:3001/';

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [codInstitution, setCodInstitution] = useState('');
    const [curso, setCurso] = useState('');
    const [serie, setSerie] = useState('');
    const [email, setEmail] = useState('');
    const [registroMatricula, setRegistroMatricula] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState();

    const [institutions, setInstitutions] = useState([]);
    const [courses, setCourses] = useState([]);
    const [coursesLevels, setCoursesLevels] = useState([]);

    const [confirmation, setConfirmation] = useState('');
    const [loading, setLoading] = useState(false);

    const getInstitutions = async () => {
        try {
            const response = await Axios.get(`${url}institutions/`);
            return setInstitutions(response.data.institutions);
        } catch (error) {
            return console.log(error)
        }
    }

    const getCourses = async () => {
        try {
            const response = await Axios.get(`${url}courses/`)
            return setCourses(response.data.courses);
        } catch (error) {
            return console.log(error)
        }
    }

    const getCoursesLevels = async () => {
        try {
            const response = await Axios.get(`${url}courses/levels`)
            return setCoursesLevels(response.data.levels);
        } catch (error) {
            return console.log(error)
        }
    }

    useEffect(() => {
        getInstitutions();
        getCourses();
        getCoursesLevels();
	}, []);

    const registerStudents = async () => {
        if (!registroMatricula | !firstName | !lastName | !nascimento | !email | !password | !curso | !serie | !avatar | !codInstitution) {
            setConfirmation("Preencha todos os campos!")
            return;
        }

        try {
            const formData = new FormData();
            formData.append('registroMatricula', registroMatricula);
            formData.append('first_name', firstName);
            formData.append('last_name', lastName);
            formData.append('birth_date', nascimento);
            formData.append('email', email);
            formData.append('passwordHash', password);
            formData.append('user_type', "Aluno");
            formData.append('telefone', telefone);
            formData.append('avatar', avatar);
            formData.append('is_active', "Ativo");
            formData.append('course_id', curso);
            formData.append('course_level_id', serie);
            formData.append('institution_id', codInstitution);
            const response = await Axios.post(`${url}students/register`, formData)
            return setConfirmation(response.data.message);
        } catch (error) {
            return setConfirmation(error.response.data.message)
        }
        
    }

    const changeHandler = (event) => {
        return setAvatar(event.target.files[0]);
    }

    const checkRegister = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            return registerStudents();
        }, 800); 
    }
    
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          checkRegister();
        }
    }

    return (
        <C.AdminUserContainer onKeyDown={handleKeyDown}>
            <GlobalStyle />
            <C.Content enctype="multipart/form-data">
                <C.AdminBody>
                    <C.ContentHeader>
                        <h1>Cadastrar aluno</h1>
                    </C.ContentHeader>
                    <C.Body>
                        <C.DividerArea>
                            <h1>Dados pessoais</h1>
                            <C.Line>
                                <C.InputItem>
                                    <label>Nome</label>
                                    <C.InputMain>
                                        <i className="ri-user-line"></i>
                                        <input type="text" placeholder="John" onChange={(e) => {setFirstName(e.target.value); setConfirmation('')}} />
                                    </C.InputMain>
                                </C.InputItem>
                                <C.InputItem>
                                    <label>Sobrenome</label>
                                    <C.InputMain>
                                        <input type="text" placeholder="Doe" onChange={(e) => {setLastName(e.target.value); setConfirmation('')}} />
                                    </C.InputMain>
                                </C.InputItem>
                            </C.Line>

                            <C.Line>
                                <C.InputItem>
                                    <label>Nascimento</label>
                                    <C.InputMain>
                                        <i className="ri-calendar-line"></i>
                                        <input type="text" placeholder="19/08/1988" onChange={(e) => {setNascimento(e.target.value); setConfirmation('')}} />
                                    </C.InputMain>
                                </C.InputItem>
                                <C.InputItem>
                                    <label>Telefone</label>
                                    <C.InputMain>
                                        <input type="text" placeholder="(XX) XXXX-XXXX" onChange={(e) => {setTelefone(e.target.value); setConfirmation('')}} />
                                    </C.InputMain>
                                </C.InputItem>
                            </C.Line>
                        </C.DividerArea>

                        <C.Divider></C.Divider>

                        <C.DividerArea>
                            <h1>MATRICULA</h1>
                            <C.Line>
                                <C.InputItem>
                                    <label>Cód. Instituição</label>
                                    <C.InputSelect onChange={(e) => {setCodInstitution(e.target.value); setConfirmation('')}}>
                                        <option value="">Selecione</option>
                                        {
                                            institutions?.map((institution) => {
                                                return (
                                                    <option 
                                                        key={institution.id} 
                                                        value={institution.id}>

                                                        {institution.name}
                                                        
                                                    </option>
                                                )
                                            })
                                        }
                                    </C.InputSelect>
                                </C.InputItem>
                            </C.Line>
                            <C.Line>
                                <C.InputItem>
                                    <label>Curso</label>
                                    <C.InputSelect onChange={(e) => {setCurso(e.target.value); setConfirmation('')}}>
                                        <option value="">Selecione</option>
                                        {
                                            courses?.map((course) => {
                                                return (
                                                    <option 
                                                        key={course.id} 
                                                        value={course.id}>

                                                        {course.name}
                                                    </option>
                                                )
                                            })
                                        }
                                    </C.InputSelect>
                                </C.InputItem>
                                <C.InputItem>
                                    <label>Série</label>
                                    <C.InputSelect onChange={(e) => {setSerie(e.target.value); setConfirmation('')}}>
                                        <option value="">Selecione</option>
                                        {
                                            coursesLevels?.map((level) => {
                                                return (
                                                    <option 
                                                        key={level.id} 
                                                        value={level.id}>
                                                        
                                                        {level.name}
                                                    </option>
                                                )
                                            })
                                        }
                                    </C.InputSelect>
                                </C.InputItem>
                            </C.Line>
                        </C.DividerArea>

                        <C.Divider></C.Divider>

                        <C.DividerArea>
                            <h1>Autenticação</h1>
                            <C.Line>
                                <C.InputItem>
                                    <label>Email</label>
                                    <C.InputMain>
                                        <input type="text" placeholder="test@etec.sp.gov.br" onChange={(e) => {setEmail(e.target.value); setConfirmation('')}} />
                                    </C.InputMain>
                                </C.InputItem>
                                <C.InputItem className="short">
                                    <label>RM</label>
                                    <C.InputMain>
                                        <input type="number" placeholder="00" onChange={(e) => {setRegistroMatricula(e.target.value); setConfirmation('')}} />
                                    </C.InputMain>
                                </C.InputItem>
                            </C.Line>
                            <C.Line className="flex-end">
                                <C.InputItem>
                                    <label>Senha</label>
                                    <C.InputMain>
                                        <input type="password" placeholder="********" onChange={(e) => {setPassword(e.target.value); setConfirmation('')}} />
                                        <i className="ri-eye-line"></i>
                                    </C.InputMain>
                                </C.InputItem>
                                <C.btnGerar>Gerar</C.btnGerar>
                            </C.Line>

                            <C.Line>
                                <C.InputItem>
                                    <label>Avatar</label>
                                    <C.InputMain>
                                        <input type="file" onChange={changeHandler}/>
                                    </C.InputMain>
                                </C.InputItem>
                            </C.Line>
                        </C.DividerArea>
                    </C.Body> 
                </C.AdminBody>
                <C.LabelConfirmation>{confirmation}</C.LabelConfirmation>
                <Button onClick={() => checkRegister()} >
                    {loading ? <Loader/> : "Continuar"}
                </Button>
            </C.Content>
        </C.AdminUserContainer>
    )
}

export default CreateStudent;