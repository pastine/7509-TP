import React from "react";
import { Button, TextField } from "@material-ui/core";

class CrearTarea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
        <div className="crear-tarea">
            <div className="texto-informacion">
                Ingrese el titulo de la tarea
            </div>
            <TextField
                variant="outlined"
                // value={this.state.text}
                // onChange={event => this.setState({ text: event.target.value })}
                // error={text === ""}
                // helperText={text === "" ? 'Empty field!' : ' '}
            />
            <div className="texto-informacion">
                Ingrese descripcion de la tarea
            </div>
            <TextField
                variant="outlined"
            />
            <div className="texto-informacion">
                Ingese prioridad
            </div>
            <TextField
                variant="outlined"
            />
            <div className="texto-informacion">
                Ingrese el tiempo estimado de realizacion
            </div>
            <TextField
                variant="outlined"
            />
            <div className="texto-informacion">
                Ingrese estado inicial
            </div>
            <TextField
                variant="outlined"
            />
            <div className="texto-informacion">
                Ingrese desarrollador
            </div>
            <TextField
                variant="outlined"
            />
            <div class="ui grid">
                <div class="two wide column">
                    <Button variant="contained" color="primary">
                        Aceptar
                    </Button>
                </div>
                <div class="two wide column">
                    <Button variant="contained" color="primary">
                        Cancelar
                    </Button>
                </div>
            </div>
        </div>
    );
  }
}

export default CrearTarea;