
function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <p>Allowed to boil now!!</p>;
    }
    return <p>water is not in the state to boil.</p>;
}

class Calcultor extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange().bind(this);
        this.state = {temperature : ''};
    }

    handleChange(e){
        this.setState({
            temperature : e.target.value
        });
    }

    render(){
        const temperature = this.state.temperature;
        return(
            <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
        <BoilingVerdict
          celsius={parseFloat(temperature)} />
      </fieldset>
        );
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
  );