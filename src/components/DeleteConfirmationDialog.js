import React from 'react';
import Dialog from '@mui/material/Dialog'; // Import Dialog component from Material UI
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button'; // Import Button component from Material UI

const DeleteConfirmationDialog = ({
  isOpen,
  onClose,
  onDelete,
  title = 'Confirm Deletion',
  message = 'Are you sure you want to delete this item?',
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" color="error" onClick={onDelete}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationDialog;
