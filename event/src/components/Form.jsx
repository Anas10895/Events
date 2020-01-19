import React, { Component } from 'react'
import { Button, Form  } from 'semantic-ui-react'
import { addForm }  from '../functions/endpoints'
export default class Owneradd extends Component {
    state = {
        
    };

    onChangHandler = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
    onSubmitHandelr = e => {
      e.preventDefault();
      addForm(this.state);
      this.props.history.push("/Home");
    };
    onChange = data => this.setState({ data })
    render() {
  
        return (
          <div>
           <h3 className="ttb">Add a Prodect</h3>
  
            <Form onSubmit={this.onSubmitHandelr}>
              <Form.Field className="form-group">
                <label className="tb">Full Name</label>
                
                <input
                              className="form-control"
  
                  name="fullName"
                  onChange={this.onChangHandler}
                />
              </Form.Field>
              <Form.Field className="form-group">
                <label className="tb">Email</label>
                <input
                  className="form-control"
  
                  name="email"
                  onChange={this.onChangHandler}
                />
              </Form.Field>
              <Form.Field className="form-group">
                <label className="tb">Phone Number</label>
                <input
                              className="form-control"
  
                  name="phone"
                  onChange={this.onChangHandler}
                />
              </Form.Field>
              <Form.Field className="form-group">
                <label className="tb">Image</label>
                <input
                              className="form-control"
  
                  name="picture"
                  onChange={this.onChangHandler}

                />
              </Form.Field>
              <Form.Field className="form-group">
                <label className="tb">Country</label>
                <input
                              className="form-control"
  
                  name="country"
                  onChange={this.onChangHandler}
                  
                />
              </Form.Field>
              <Form.Field className="form-group">
                <label className="tb">City</label>
                <input
                              className="form-control"
  
                  name="city"
                  onChange={this.onChangHandler}
                  
                />
              </Form.Field>
   
              <Form.Field className="form-group">
                <label className="tb">Position</label>
                <input
                              className="form-control"
  
                  name="position"
                  onChange={this.onChangHandler}
                  
                />
              </Form.Field>
              <Form.Field className="form-group">
                <label className="tb">Notes</label>
                <input
                              className="form-control"
  
                  name="notes"
                  onChange={this.onChangHandler}
                  
                />
              </Form.Field>
  
              <Button type="submit" className="btn btn-primary btn-block">
                Submit
              </Button>
              
            </Form>
          </div>
        );
      }
    }
    
    