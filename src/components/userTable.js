import React, { useEffect, useState } from 'react';
import { Table, Button, FormControl } from 'react-bootstrap';
import { PencilSquare, Trash, Save } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { clearUserAddMessage, clearUserDeleteMessage, clearUserUpdateMessage, deleteUser, updatedUser, userAdded, usersListAll } from '../redux/actions/users.action';
import { toast } from 'react-toastify';
import axios from 'axios';

const UserTable = () => {
    const dispatch = useDispatch();
    const [editableUserId, setEditableUserId] = useState(null);
    const [editedUserName, setEditedUserName] = useState('');
    const [newUserName, setNewUserName] = useState('');
    const [showAddUser, setShowAddUser] = useState(false);
    const [count, setCount] = useState(0);

    //Data Fetch From Redux Store:-
    const userListState = useSelector((state) => state.userList);
    const { data: users, getLoading, getSuccess, updateError, addError, addLoading, addMessage, addSuccess, updateLoading, updateMessage, updateSuccess
        , deleteLoading, deleteSuccess, deleteMessage, deleteError
    } = userListState;
    
    //Count API Called Here:-
    const getCount = async () => {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/countApi`);
        return response.data.totalCount;
    };
    
    //Update User:-
    const handleEdit = (userId, userName) => {
        setEditableUserId(userId);
        setEditedUserName(userName);
    };

    const handleSave = (userId) => {
        dispatch(updatedUser({ _id: userId, name: editedUserName }));
        setEditableUserId(null); // Disable editing mode after updating
    };
    
    const handleNameChange = (e) => {
        setEditedUserName(e.target.value);
    };
    

    //New User Added:-
    const handleAddUser = () => {
        if (showAddUser && newUserName.trim()) {
            // Save the new user
            dispatch(userAdded({ name: newUserName }));
            setNewUserName('');
        }
        setShowAddUser(!showAddUser);
    };
   

    //Delete User:-
    const handleDelete = (userId) => {
        dispatch(deleteUser(userId));
    }

    
    useEffect(() => {
        if (updateSuccess) {
            toast.success(updateMessage)
            dispatch(clearUserUpdateMessage());
            dispatch(usersListAll());
        }
        if (updateError) {
            toast.error(updateMessage)
            dispatch(clearUserUpdateMessage());
            dispatch(usersListAll());
        }
        if (addSuccess) {
            toast.success(addMessage)
            dispatch(clearUserAddMessage());
            dispatch(usersListAll());
        }
        if (addError) {
            toast.error(addMessage);
            dispatch(clearUserAddMessage());
            dispatch(usersListAll());
        }
        if (deleteSuccess) {
            toast.success(deleteMessage)
            dispatch(clearUserDeleteMessage());
            dispatch(usersListAll());
        }
        if (deleteError) {
            toast.error(deleteMessage);
            dispatch(clearUserDeleteMessage());
            dispatch(usersListAll());
        }

        const fetchCount = async () => {
            const newCount = await getCount();
            setCount(newCount);
        };

        fetchCount();

    }, [updateSuccess, updateMessage, updateError, addSuccess, addError, addMessage, deleteSuccess, deleteMessage, deleteError]);


    useEffect(() => {
        dispatch(usersListAll());
    }, [dispatch]);

    return (
        <div>
            <div className='d-flex justify-content-center p-2 m-2 ' style={{ fontSize: '25px' }}>
                count-{count && count}
            </div>
            <div className='d-flex justify-content-end p-4 m-4'>
                {showAddUser && (
                    <FormControl
                        type="text"
                        value={newUserName}
                        onChange={(e) => setNewUserName(e.target.value)}
                        placeholder="Enter user name"
                        className="me-2"
                    />
                )}
                <Button onClick={handleAddUser}>
                    {showAddUser ? 'Save' : 'Add User'}
                </Button>
            </div>
            
            <Table striped bordered hover className='container'>
                <thead> 
                    <tr>
                        <th>Sr No</th>
                        <th>User Name</th>
                        <th>Count</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id}>
                            <td>{index + 1}</td>
                            <td>
                                {editableUserId === user._id ? (
                                    <FormControl
                                        type="text"
                                        value={editedUserName}
                                        onChange={handleNameChange}
                                    />
                                ) : (
                                    user.name
                                )}
                            </td>
                            <td>{user.count}</td>
                            <td>
                                {editableUserId === user._id ? (
                                    <Button
                                        variant="success"
                                        onClick={() => handleSave(user._id)}
                                        className="me-2"
                                    >
                                        <Save />
                                    </Button>
                                ) : (
                                    <Button
                                        variant="warning"
                                        onClick={() => handleEdit(user._id, user.name)}
                                        className="me-2"
                                    >
                                        <PencilSquare />
                                    </Button>
                                )}
                                <Button
                                    variant="danger"
                                    onClick={() => handleDelete(user._id)}
                                >
                                    <Trash />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default UserTable;
