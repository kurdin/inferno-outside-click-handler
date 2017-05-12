import Component from 'inferno-component';
import { createVNode } from 'inferno';

import { addEventListener, removeEventListener } from 'consolidated-events';

const defaultProps = {
  children: <span />,
  component: 'div',
  ignoreClass: 'ignore-onclickoutside',
  onOutsideClick() {},
};

export default class OutsideClickHandler extends Component {
  constructor(props) {
    super(props);
    this.onOutsideClick = this.onOutsideClick.bind(this);
  }

  componentDidMount() {
    // `capture` flag is set to true so that a `stopPropagation` in the children
    // will not prevent all outside click handlers from firing - maja
    this.clickHandle = addEventListener(
      document,
      'click',
      this.onOutsideClick,
      { capture: true },
    );
  }

  componentWillUnmount() {
    if (this.clickHandle) removeEventListener(this.clickHandle);
  }

  onOutsideClick(e) {
    const isDescendantOfRoot = this.childNode.contains(e.target);
    if (!isDescendantOfRoot && !e.target.classList.contains(this.props.ignoreClass) ){
      this.props.onOutsideClick(e);
    }
  }

  render({ component,  children, ...props }) {
    props.ref = (ref) => { this.childNode = ref; }
    return createVNode(typeof component === 'string' ? 2 : 16, component, props && props.className, children, props);
  }
}

OutsideClickHandler.defaultProps = defaultProps;