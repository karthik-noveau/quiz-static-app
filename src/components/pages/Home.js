import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Link} from 'react-router-dom'

function Home() {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
      setOpen(false);
    };

    const [text, setText] =React.useState('');

    const handelClicked = (e)=>{
        console.log("name "+e.target.value)
        setText(e.target.value)
    }
  
    return (
        <div>
            <div>

                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Enter Your Name</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            There are 25 questions, here you can select the option only one time and finally you can get the score
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handelClicked}
                        />
                    </DialogContent>
                    <DialogActions>

                       <Link style={{textDecoration:"none"}} to={{pathname:'/Quiz'}} state={{data:text}}><Button >Start The Quiz</Button></Link> 
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}

export default Home;