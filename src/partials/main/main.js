import ReactModal from 'react-modal';
import './main.scss';

export class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      loading: false,
      className: '',
      openModal: false
    };
  }

  getUsers = () => {
    this.setState({
      loading: true,
      users: []
    });

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users, loading: false }));
  }

  showUserInfo(user) {
    alert(`${user.email}: ${user.phone}`);
  }

  clickHandler() {
    if (this.state.className === 'active') {
      this.setState({
        className: ''
      });
    } else {
      this.setState({
        className: 'active'
      });
    }
  }

  updateModal(isOpen) {
    this.setState({ openModal: isOpen });
  }

  render() {
    const { users, loading } = this.state;

    return (
      <main className='main'>
        <h1>Hello</h1>

        <ReactModal
          isOpen={this.state.openModal}
          contentLabel="Minimal Modal Example"
          shouldCloseOnEsc
          ariaHideApp={false}
        >
          <p>Hello</p>
          <button onClick={() => this.updateModal(false)}>Close</button>
        </ReactModal>
      </main>
    );
  }
}
