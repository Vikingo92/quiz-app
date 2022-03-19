import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import { questionGeek } from '../data/Preguntas'
import { DivForm, FormStyle, Titulo, RadioStyle, ButtonStyle } from '../styles/CardQuestion'

export default class Questions extends Component {
// Inicializamos el estado de nuestro componente con el constructor. Iniciamos un objeto
// El super hereda los componentes de la clase.
    constructor() {
        super()
        this.state = {
            numberQuestion: 0,
            question: {
                question: '',
                a: '',
                b: '',
                c: '',
                d: '',
                correct: ''
            },
            score: 0,
            answerSelect: ''
        }
    }

    // This.setState se cambia el estado, es la funcion que modifica el estado.
    componentDidMount() {
       const currentQuizData = questionGeek[this.state.numberQuestion] 

       this.setState({
           question: {
               question: currentQuizData.question,
               a: currentQuizData.a,
               b: currentQuizData.b,
               c: currentQuizData.c,
               d: currentQuizData.d,
               correct: currentQuizData.correct,
            }
       })
    }

    onChanged = e => {
        // console.log(e)
        // console.log(e.currentTarget)
        // console.log(e.currentTarget.value)


        this.setState({
            answerSelect: e.currentTarget.value
        })
    }

    handleSubmit = e => {

        e.preventDefault()
        e.target.reset()

        if(this.state.answerSelect === this.state.question.correct) {
            this.setState( {
                score: this.state.score + 1
            })
        }
        if (this.state.numberQuestion < questionGeek.length) {
            this.componentDidMount()
        } else  {
            console.log(this.state.score)
        }
    }

    // This.state = Es el estado
    // this.setState = Funcion que modifica el estado
    render() {
        console.log(this.state.numberQuestion)
        return (
            <DivForm>
                <FormStyle onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="control-radio" style={{ padding: "4rem" }}>
                        <Titulo>{this.state.question.question}</Titulo>
                        <RadioStyle
                            type="radio"
                            label={this.state.question.a}
                            name={`respuestas`}
                            id={this.state.question.a}
                            onChange={this.onChanged}
                            value={this.state.question.a}
                        />
                        <RadioStyle
                            type="radio"
                            label={this.state.question.b}
                            name={`respuestas`}
                            id={this.state.question.b}
                            onChange={this.onChanged}
                            value={this.state.question.b}

                        />
                        <RadioStyle
                            type="radio"
                            label={this.state.question.c}
                            name={`respuestas`}
                            id={this.state.question.c}
                            onChange={this.onChanged}
                            value={this.state.question.c}

                        />
                        <RadioStyle
                            type="radio"
                            label={this.state.question.d}
                            name={`respuestas`}
                            id={this.state.question.d}
                            onChange={this.onChanged}
                            value={this.state.question.d}

                        />
                    </Form.Group>
                    <ButtonStyle variant="primary" type="submit"
                    onClick={ () => {
                        if (this.state.numberQuestion < questionGeek.length)
                        this.setState( {
                            numberQuestion: this.state.numberQuestion + 1
                            // Esto es un contador
                        })
                    }}
                    >
                        Enviar</ButtonStyle>
                    <h2 style={{textAlign: 'center'}}>{this.state.score}/
                        {questionGeek.length}</h2>
                </FormStyle>
            </DivForm>
        )
    }
}
