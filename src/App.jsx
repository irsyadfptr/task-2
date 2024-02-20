import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center m-0">
          <h1 className='text-center font-weight-bold py-4'>Registration Form</h1>
        <div className="row" style={{maxWidth: '60%'}}>
            <div className="alert alert-success">
                Data has been saved successfully
            </div>
            <div className="alert alert-danger">
                Data Error
            </div>

            <div className="col-4">
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input type="text" name="firstName" className="form-control" id="firstName" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input type="text" name="lastName" className="form-control" id="lastName" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="department" className="form-label">Department</label>
                                <select className="form-select" name="department" aria-label="Default select example" >
                                    <option value="" selected>Please choose one</option>
                                    <option value="Data Management">Data Management</option>
                                    <option value="Finance, HR & Administration">Finance, HR & Administration</option>
                                    <option value="Product Development & Operation">Product Development & Operation</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Address</label>
                                <textarea name="address" className="form-control" id="address" rows="3"></textarea>
                            </div>
                            <div className="d-grid gap-2">
                                <button type="submit" className="">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="col-8">
            <div className="card" style={{background: '#00494d'}}>
                      <div className="card-header text-white">
                        <strong>USER LIST</strong>
                    </div>
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Department</th>
                                    <th scope="col">	Address</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Budi Doremi </td>
                                    <td>Product Development & Operation</td>
                                    <td>Wisma BNI 46</td>
                                    <td>
                                        <div className='d-flex gap-3'>
                                            <button type="button" className="btn btn-warning btn-sm">Edit</button>
                                            <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                        </div>                                    
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Joko Susanto </td>
                                    <td>Data Management</td>
                                    <td>Gelora Bung Karno</td>
                                    <td>
                                        <div className='d-flex gap-3'>
                                            <button type="button" className="btn btn-warning btn-sm">Edit</button>
                                            <button type="button" className="btn btn-danger btn-sm">Delete</button>
                                        </div>                                    
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default App
