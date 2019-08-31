import { produce } from "immer";
import createReactClass from "create-react-class";

export default function(classDefinition) {
  return createReactClass(
    Object.assign(classDefinition, {
      produceState: function(callback) {
        return this.setState(produce(this.state, callback));
      }
    })
  );
}
