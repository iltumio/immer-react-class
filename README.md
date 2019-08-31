# Immer React Class

A Create React Class extension that injects a method inside your component to easily update the state using immer.

## Usage

You can use createReactClass the same way as before.

```javascript
import createReactClass from "immer-react-class";

var User = createReactClass({
  getInitialState: function() {
    return {user: {firstName: "Mario", lastName: "Rossi"}};
  },
  changeFirstName: (firstName)=>{

    // Use produceState method instead of setState to take advantage 
    // of the immutability that comes with immer
    this.produceState(prevState=>prevState.firstName = firstName);
  },
  render: ()=>{
    return (
      <div>
        <span>{`Hello ${this.state.user.firstName}`}</span>
        <button onClick={this.changeFirstName("Paolo")}>
          Change Name
        </button>
      </div>
    );
  }
});

```