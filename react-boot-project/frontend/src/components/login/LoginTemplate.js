import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';

  class LoginTemplate extends Component {
    // 초기화
    state = {};

    useStyles = makeStyles((theme) => ({
      paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));

    // 로그인후 todos 페이지 이동
    doLogin = async () => {
      // 유저정보 체크
      const {user} = this.state;

      if( user === undefined) {
        alert("유저정보를 입력해주세요.");
        return;
      }

      await axios({
        method : 'post',
        url : '/login',
        header : {
          'Content-Type': 'application/json'
        },
        data : {
          "username" : user.username,
          "password" : user.password
        }
      }).then (response => {
        if (response.data.result.indexOf("400") != -1) {
          alert("로그인에 실패하였습니다.");
          return;
        }
        window.sessionStorage.setItem("userInfo","test");
        window.sessionStorage.setItem("currentCmp","menu");
        // 성공시 todos UI 보여주게 state 변경후, App Component에게 전달
        alert("로그인 성공하였습니다.");
        this.props.handlePageType('todos');
      });

    };

    // 회워가입 페이지 이동
    doReister = () => {
      this.props.handlePageType('userRegister');
    };

    doChange = (e) => {
      // state -> user 아래의 변수에 값 할당
      // 태그 이름을 쪼개어, state 변수에 할당한다.
      const dataTypeList = e.target.name.split(".");
      const value = e.target.value;
      const dataTypeLeng = dataTypeList.length;
      let currentDataType = this.state;
      for (let i=0;i<dataTypeLeng;i++){
        let dataType = dataTypeList[i];
        if (i === (dataTypeLeng-1)) {
            // 변수값 입력
            currentDataType[dataType] = value;
            continue;
        }

        if (currentDataType[dataType] === undefined ) {
            currentDataType[dataType]= {};
        }
        currentDataType = currentDataType[dataType];
      }
    };

    render() {
      const {user} = this.state;

      /*
        1. submit 버튼을 누르면 todos 페이지로 전환하게 하자
      */
      return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={this.useStyles.paper}>
            <Avatar className={this.useStyles.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={this.useStyles.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="user.username"
                autoComplete="email"
                onChange={this.doChange}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="user.password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.doChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                //type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={this.doLogin}
                className={this.useStyles.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" onClick={this.doReister}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
            <Typography variant="body2" color="textSecondary" align="center">
              {'Copyright © '}
              <Link color="inherit" href="https://material-ui.com/">
                Your Website
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Box>
        </Container>
      );
    }
  }
  export default LoginTemplate;
