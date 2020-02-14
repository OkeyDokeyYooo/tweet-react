import React, { Component } from 'react';
import axios from 'axios';

import Nav from './Nav';
import TweetList from './tweet/TweetList';
import TweetPost from './tweet/TweetPost';
import SideBar from './SideBar';

import logo from '../img/logo.png'
import avatar from '../img/sample-avatar.png'

class Page extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tweets: [],
            token: ''
        };
        this.handleNewPost = this.handleNewPost.bind(this)   
        this.handleLogout = this.handleLogout.bind(this)
        this.handleTokenUpdate = this.handleTokenUpdate.bind(this)     
    }

    handleTokenUpdate(token) {
        this.setState({
            token: token
        })
    }

    handleLogout() {
        this.setState({
            tokn: ''
        })
    }

    handleNewPost(newPost) {
        let tweets = this.state.tweets
        tweets.unshift({
            createdAt: Date.now(),
            author: {
                avatarUrl: 'https://ucarecdn.com/8c34b406-c767-4858-91e2-cb1e45ad231f/',
                username: 'username',
                name: 'username',
            },
            content: newPost,
            _id: Math.random().toString(36).substr(2, 9)
        })
        // update the new state
        this.setState({
            tweets: tweets
        })
    }

    componentDidMount() {
        axios.get(`http://tweet-api.webdxd.com/tweet`)
            .then(res => {
                const tweets = res.data.tweets
                this.setState({ tweets });
            })
    }

    render() {
        return (
            <div>
                <Nav logo={logo} avatar={avatar} token={this.state.token} />
                <div className="container">
                    <SideBar avatar={avatar} handleTokenUpdate={this.handleTokenUpdate} handleLogout={this.hanleLogout} token={this.state.token}/>
                    <div className="col-3of5 bg-white">
                        {this.state.token && <TweetPost avatar={avatar} handleNewPost={this.handleNewPost} />}
                        <TweetList tweets={this.state.tweets} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Page;
