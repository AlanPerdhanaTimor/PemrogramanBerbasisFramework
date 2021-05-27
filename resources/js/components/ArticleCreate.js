import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';
 
class ArticleCreate extends Component {
     
    constructor (props) {
        super(props)
        this.state = {
            judul: '',
            genre: '',
            tahun: '',
            score: '',
            deskripsi: '',
            alert: null,
            errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleCreateNewArticle = this.handleCreateNewArticle.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
    }
 
    handleFieldChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
 
    goToHome(){
        const getAlert = () => (
            <SweetAlert
                success
                title="Success!"
                onConfirm={() => this.onSuccess() }
                onCancel={this.hideAlert()}
                timeout={2000}
                confirmBtnText="Oke Siap"
                >
                Created article successfully
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }
 
    onSuccess() {
        this.props.history.push('/');
    }
 
    hideAlert() {
        this.setState({
            alert: null
        });
    }
 
    handleCreateNewArticle (event) {
        event.preventDefault()
        const article = {
            judul: this.state.judul,
            genre: this.state.genre,
            tahun: this.state.tahun,
            score: this.state.score,
            deskripsi: this.state.deskripsi
        }
        axios.post('/api/article/store', article).then(response => { 
            var msg = response.data.success;
            if(msg == true){
                return this.goToHome();
            }
        })
    }
 
    hasErrorFor (field) {
        return !!this.state.errors[field]
    }
 
    renderErrorFor (field) {
        if (this.hasErrorFor(field)) {
            return (
            <span className='invalid-feedback'>
                <strong>{this.state.errors[field][0]}</strong>
            </span>
            )
        }
    }
 
    render () {
        return (
        <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-6'>
                <div className='card'>
                  <div className='card-header'>Create new project</div>
                  <div className='card-body'>
                    <form onSubmit={this.handleCreateNewArticle}>
                      <div className='form-group'>
                        <label htmlFor='judul'>judul</label>
                        <input
                          id='judul'
                          type='text'
                          className={`form-control ${this.hasErrorFor('judul') ? 'is-invalid' : ''}`}
                          name='judul'
                          value={this.state.judul}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('judul')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='genre'>genre</label>
                        <input
                          id='genre'
                          type='text'
                          className={`form-control ${this.hasErrorFor('genre') ? 'is-invalid' : ''}`}
                          name='genre'
                          value={this.state.genre}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('genre')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='tahun'>tahun</label>
                        <input
                          id='tahun'
                          type='text'
                          className={`form-control ${this.hasErrorFor('tahun') ? 'is-invalid' : ''}`}
                          name='tahun'
                          value={this.state.tahun}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('tahun')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='title'>score</label>
                        <input
                          id='score'
                          type='text'
                          className={`form-control ${this.hasErrorFor('score') ? 'is-invalid' : ''}`}
                          name='score'
                          value={this.state.score}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('score')}
                      </div>
                      <div className='form-group'>
                        <label htmlFor='deskripsi'>deskripsi</label>
                        <textarea
                          id='deskripsi'
                          className={`form-control ${this.hasErrorFor('deskripsi') ? 'is-invalid' : ''}`}
                          name='deskripsi'
                          rows='10'
                          value={this.state.deskripsi}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('deskripsi')}
                      </div>
                      <Link
                        className='btn btn-secondary'
                        to={`/`}
                        >Back
                      </Link>
                      <button className='btn btn-primary'>Create</button>
                      {this.state.alert}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
export default ArticleCreate