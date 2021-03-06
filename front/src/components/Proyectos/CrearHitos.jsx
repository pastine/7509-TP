import React from "react";
import { Button, TextField, FormControl, Select, MenuItem } from "@material-ui/core";

class CrearHitos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        nombreHito: "",
        descripcion: "",
        requisito: "",
        nombreHitoVacio: false,
        descripcionHitoVacia: false
    };
    this.crearHito = this.crearHito.bind(this);
  }

  crearHito() {
    let hito = {
        nombreHito: this.state.nombreHito,
        descripcion: this.state.descripcion,
        requisito: this.state.requisito,
    };

    let puedeCrearHito = true;

    if (this.state.nombreHito == '') {
        puedeCrearHito = false;
        this.setState({
            nombreHitoVacio: true
        });
    } else {
        this.setState({
            nombreHitoVacio: false
        });
    }  if (this.state.descripcion == '') {
        puedeCrearHito = false;
        this.setState({
            descripcionHitoVacia: true
        });
    } else {
        this.setState({
            descripcionHitoVacia: false
        });
    }
    if (puedeCrearHito) {
        this.props.agregarHito(hito);
        this.props.intercambiarTablaCrearHitos();
    }
  }
  render() {
    return (
        <div className="crear-tarea" hidden={!this.props.mostrarCrearHitos}>
            <div className="texto-informacion">
                Ingrese el nombre del hito
            </div>
            <TextField
                id="nombre-hito"
                variant="outlined"
                value={this.state.nombreHito}
                aria-required="true"
                aria-invalid={this.state.nombreHitoVacio}
                onChange={event => this.setState({ nombreHito: event.target.value })}
                error={this.state.nombreHitoVacio}
                helperText={this.state.nombreHitoVacio? 'Campo vacio' : ' '}
            />
            <div className="texto-informacion">
                Ingrese descripción
            </div>
            <TextField
                id="descripcion-hito"
                variant="outlined"
                value={this.state.descripcion}
                aria-required="true"
                aria-invalid={this.state.descripcionHitoVacia}
                onChange={event => this.setState({ descripcion: event.target.value })}
                error={this.state.descripcionHitoVacia}
                helperText={this.state.descripcionHitoVacia? 'Campo vacio' : ' '}
            />
            <div className="texto-informacion">
                Ingrese requisito
            </div>
            <FormControl className="form-input">
                <Select
                    labelId="label-tipo-requisito"
                    id="seleccionar-requisito"
                    value={this.state.requisito}
                    onChange={event => this.setState({ requisito: event.target.value })}
                >
                {
                    this.props.requisitos.map((requisito, i) => (
                        <MenuItem key={i} value={requisito.nombreRequisito}>{requisito.nombreRequisito}</MenuItem>
                    ))
                }
                </Select>
            </FormControl>
            <div className="ui grid">
                <div className="two wide column">
                    <Button id="boton-aceptar-hito" variant="contained" color="primary" onClick={this.crearHito}>
                        Agregar Hito
                    </Button>
                </div>
                <div className="two wide column">
                    <Button variant="contained" color="primary" onClick={this.props.intercambiarTablaCrearHitos}>
                        Cancelar
                    </Button>
                </div>
            </div>
        </div>
    );
  }
}

export default CrearHitos;
