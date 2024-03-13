import { Modal } from 'react-bootstrap'

function TermCondition(props) {
    return (
        <Modal
            show={props.show}
            dialogClassName="modal-90w"
            onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Terms and conditions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Duis at congue sem. Aenean eu nisi sem. Curabitur fringilla pulvinar lorem, sit amet consectetur lectus interdum ac. Curabitur lacinia est et hendrerit euismod. Pellentesque accumsan elit velit, dictum rutrum diam varius semper. Mauris non tortor pretium, euismod ex non, pellentesque nunc. Pellentesque ut porta lorem, sed dictum nulla.
                </p>
                <p>
                    Pellentesque molestie sed quam at ultrices. Nulla sem urna, sagittis eu nunc vel, elementum sollicitudin erat. Cras nec sodales leo. Donec vel nulla vitae lorem commodo elementum ac ultricies sem. Vivamus vitae massa et nulla facilisis convallis eu quis sapien. Ut eleifend felis est, nec luctus diam fermentum ac. Sed at scelerisque sapien. Vivamus tempor sollicitudin magna, ac euismod massa accumsan ac. Sed tincidunt, metus in lobortis porta, odio erat ornare lorem, vel sagittis nisi tellus nec nibh. Morbi eu justo at sem sodales rhoncus. Donec et elit mauris. Cras a nibh egestas ligula posuere consectetur et semper ante. Vestibulum quis nibh orci. Maecenas vulputate feugiat placerat.
                </p>
                <p>
                    Aliquam bibendum erat nec feugiat faucibus. Praesent et quam sapien. Ut accumsan vulputate metus, sit amet posuere dolor faucibus id. Fusce a pretium mi. Nulla ipsum enim, vulputate a urna eget, viverra consequat sapien. Morbi suscipit, odio a mollis facilisis, metus metus ultricies nulla, at gravida nibh orci non purus. Morbi maximus posuere mauris, in luctus libero efficitur eu. Donec nisi justo, aliquam at hendrerit et, egestas in ex. Proin eget suscipit felis, a ullamcorper lacus. Duis vehicula faucibus placerat. Quisque sagittis elit dolor, sed cursus neque facilisis in. Maecenas leo neque, pretium eget pulvinar at, pulvinar in ex. Nulla facilisi.
                </p>
                <p>
                    Nulla varius dui quis neque rutrum vulputate. Etiam semper enim quis urna sagittis, in viverra odio scelerisque. Morbi cursus, dolor a hendrerit sagittis, purus dui blandit lorem, id auctor ante elit vitae nunc. Etiam vel dictum mauris. Quisque eget neque in risus mollis volutpat at ut felis. Sed convallis augue ac neque interdum, vitae cursus nulla porttitor. Duis porttitor nisi a congue feugiat. Ut consequat leo massa, vitae ultrices arcu ornare eu. Duis maximus sem et est aliquam vehicula. Cras ut ex eget eros consequat fermentum. Nunc in arcu vel magna facilisis imperdiet. Vestibulum euismod feugiat erat eu faucibus. Quisque lobortis sit amet arcu sit amet lacinia. Ut non est vel felis commodo elementum. Nunc mattis condimentum pulvinar. Aliquam libero ligula, porta in leo eget, gravida pulvinar massa.
                </p>
            </Modal.Body>
        </Modal>)
}

export default TermCondition