import React from 'react';

export class DropdownItem extends React.Component{
  render() {
    return (<li className="dropdown-option" 
              onClick={this.props.click}>
                {this.props.label}
          </li>);
  }
}

export class DropdownActiveItem extends React.Component {
  render() {
    return <div className="dropdown-active">
              <div className="dropdown-label">
                {this.props.label}
              </div>
              <div className="dropdown-choice">
                {this.props.activeItem}
              </div>
          </div>;
  }
}

export class DropdownMenu extends React.Component {
  render() {
    let className="dropdown-select";
    if (this.props.toggled) {
      className += " open";
    }
    
    return <ul className={className}>
          {this.props.children}
        </ul>
  }
}

export class Dropdown extends React.Component {
  constructor (){
    super();
    
    this.state = {
      toggled: false,
      selected: "post"
    };
  }
  
  componentWillMount(){
    this.setState({selected: this.props.value});
  }

  componentWillReceiveProps(props) {
    this.setState({selected: props.value});
  }
  
  toggleDropdown () {
    this.setState({toggled: !this.state.toggled});
  }

  handleClick(value) {
    this.props.eventHandler(value);
    
    this.toggleDropdown();
  }

  render () {
    let className="dropdown-container";
    
    if (this.props.className) {
      className += " " + this.props.className;
    }

    let dropdown = this.props.options.map( (item, i) => {
      return <DropdownItem label={item.label} value={item.value} click={this.handleClick.bind(this, item.value)} key={i} />;
    });

    return (
      <div className={className} 
        onClick={this.toggleDropdown.bind(this)}>
        <DropdownActiveItem 
          label={this.props.label}
          activeItem={this.state.selected} />
        <DropdownMenu toggled={this.state.toggled} >
          {dropdown}
        </DropdownMenu>
      </div>
    );
  }
}
