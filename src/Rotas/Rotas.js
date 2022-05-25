import  React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import Home from '../Pages/Home/Home';
import AddNavers from '../Pages/AddNavers/AddNavers';
import EditNaver from '../Pages/EditNaver/EditNaver';

function Rotas() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Adicionar" component={AddNavers} />
      <Route exact path="/Editar" component={EditNaver} />
    </Switch>
  )
}

export default Rotas;
