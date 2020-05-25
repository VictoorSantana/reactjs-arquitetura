import React, { Component } from 'react';
import FormFast from '../helpers/formfast';

import { Form, Button } from 'react-bootstrap';
import imgBannerLogin from '../items/images/bannerLogin.png'

class RouteLogin extends Component {


    handleSubmit= e => {
        e.preventDefault();

        const data = FormFast.getObject(e.target);

        console.log(data);        
        console.log('formulário enviado!');
    }

    render() {
        return (
        <div className="w-100 d-flex justify-content-center py-5">
          <img src={imgBannerLogin} alt="banner login" className="mr-2 rounded shadow border-top border-primary d-none d-lg-block" style={{width:"418px",borderWidth:"3px!important"}}></img>          
          <div className="p-3 shadow rounded bg-white border-top border-primary" style={{width: "350px",borderWidth: "3px!important"}}>
            <h2 className="text-center m-0">Sign In</h2>
            <h4 className="text-center text-muted font-weight-normal">Bem vindo</h4>

            <hr className="m-3"></hr>
            <Form onSubmit={this.handleSubmit}>

              <Form.Group controlId="usuario">
                <Form.Label className="text-secondary d-block m-0">Usuário</Form.Label>
                <Form.Control type="text" name="usuario"/>
                <Form.Text className="form-text text-danger" name="usuario">
                  *Campo do usuário não pode ficar vazio.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="senha">
                <Form.Label className="text-secondary d-block m-0">Senha</Form.Label>
                <Form.Control type="password" name="senha"/>
                <Form.Text className="form-text text-danger">
                  *Campo de senha não pode ficar vazio.
                </Form.Text>
              </Form.Group>            

              <hr className="m-3"></hr>

              <div className="form-group">
                <Button variant="primary" type="submit" block>Entrar</Button>            
                <Button variant="link">Esqueceu a senha?</Button>                                
              </div>

            </Form>
          </div>
          
          <p className="cc-copyrights text-secondary">Copyright © 2020 Victor Santana.</p>
        </div>
        
        );
    }
}

export default RouteLogin;