import React, { PureComponent } from 'react'
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
          //step 2
          id:this.props.match.params.id,
            firstNmae:'',
            lastName:'',
            emailId:''
        }
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);

        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.saveOrUpdateEmployee=this.saveOrUpdateEmployee .bind(this);
    }

    componentDidMount(){
      if(this.state.id==-1){
        return
      }
      else{

      
      EmployeeService.getEmployeeById(this.state.id).then((res)=>{
         let employee=res.data;
         this.setState({firstName:employee.firstName,
          lastName:employee.lastName,
          emailId:employee.emailId})
      });
    }
  }

    saveOrUpdateEmployee=(e)=>{
       e.preventDefault();
        let employee={firstName:this.state.firstName,lastName:this.state.lastName,emailId:this.state.emailId};
        
        console.log(`employee => `+JSON.stringify(employee));
       //returns promise

       if(this.state.id == -1){
        EmployeeService.createEmployee(employee).then(res=>{
          this.props.history.push('/employees');
        });
       }else{
        EmployeeService.updateEmployee(employee,this.state.id).then((res)=>{
          this.props.history.push(`/employees`);
    }); 
        }
    }
    changeFirstNameHandler=(event)=>{
      this.setState({firstName:event.target.value});
    }
    changeLastNameHandler=(event)=>{
        this.setState({lastName:event.target.value});
      }

      changeEmailIdHandler=(event)=>{
        this.setState({emailId:event.target.value});
      }
      cancel(){
        this.props.history.push('/employees'); 
      }

      getTitle(){
        if(this.state.id==-1){
          return <h3 className="text-center">Add Employee</h3>
        }
        else{
          return <h3 className="text-center">Update Employee</h3>
        }

      }
    render() {
        return (
            <div>
              <br></br>
                <div className="container">
                   <div className="row">
                          <div className="card col-md-6 offset-md-3 offset-md-3">
                             {
                               this.getTitle()}
                             <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div> 
                                        <div className="form-group">
                                        <label> Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                        value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div> 
                                        <div className="form-group">
                                        <label>Email Address: </label>
                                        <input placeholder="Email Address" name="emailId" className="form-control"
                                        value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                                        </div> 
                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                    </form> 
                             </div>
                           </div>
                  </div>
                </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent