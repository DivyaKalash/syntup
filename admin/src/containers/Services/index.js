import React, { useEffect, useState } from 'react';
import { Container, Modal, Button, Table} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { addService, getAllServices } from '../../actions/services';
import Input from '../../components/UI/Input';

const Service = () => {
    const [name, setName] = useState("");
    const [availability, setAvailability] = useState("");
    const [serviceCost, setServiceCost] = useState("");
    const [description, setDescription] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [servicePictures, setServicePictures] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(()=>{
        dispatch(getAllServices());
    },[]);

    const category = useSelector((state) => state.category);
    const service = useSelector((state) => state.service);
    const dispatch = useDispatch();


    const handleClose = () => {
        const form = new FormData();
        form.append("name", name);
        form.append("availability", availability);
        form.append("serviceCost", serviceCost);
        form.append("description", description);
        form.append("category", categoryId);
        for (let pic of servicePictures) {
          form.append("servicePictures", pic);
        }
        dispatch(addService(form)); 
        setShow(false);
      };
      const handleShow = () => setShow(true);
      const createCategoryList = (categories, options = []) => {
        for (let category of categories) {
          options.push({ value: category._id, name: category.name });
          if (category.children.length > 0) {
            createCategoryList(category.children, options);
          }
        }
        return options;
      };
      const handleServicePictures = (e) => {
        setServicePictures([...servicePictures, e.target.files[0]]);
      };

      const renderServiceTable = () => {
        return (
            <Table>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>Availability</th>
                  <th>Service Cost</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {service.services.length > 0
                  ? service.services.map((service, index) => (
                      <tr>
                      
                        <td>{index}</td>
                        <td>{service.name}</td>
                        <td>{service.availability}</td>
                        <td>{service.serviceCost}</td>
                        <td>{service.category}</td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </Table>
          );
      }

      const renderAddServiceModal = () => {
          return (
              
                  <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                          <Modal.Title>Add new service</Modal.Title>

                      </Modal.Header>
                      <Modal.Body>
                      <Input
          label="Name:"
          value={name}
          placeholder={`Service Name`}
          onChange={(e) => setName(e.target.value)}
        />

        {/* <Input
          label="Availability"
          value={availability}
          placeholder={`Quantity`}
          onChange={(e) => setAvailability(e.target.value)}
        /> */}
        <select className="form-control" value={availability}           onChange={(e) => setAvailability(e.target.value)}>
            <option>Availability</option>
            <option>Yes</option>
            <option>No</option>
        </select>


        <Input
          label="Service Cost:"
          value={serviceCost}
          placeholder={`Service Cost`}
          onChange={(e) => setServiceCost(e.target.value)}
        />
        <Input
          label="Description:"
          value={description}
          placeholder={`Description`}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select
          className="form-control"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option>select category</option>
          {createCategoryList(category.categories).map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>

        {servicePictures.length > 0
          ? servicePictures.map((pic, index) => (
              <div key={index}>{pic.name}</div>
            ))
          : null}
        <input
          type="file"
          name="servicePictures"
          onChange={handleServicePictures}
        />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Add
                        </Button>
                    </Modal.Footer>
                  </Modal>
              
          )
      }
    return (
        <div style={{marginTop: "100px"}}>
        <Container>
        <button onClick={handleShow}>Add Service</button>

            {renderServiceTable()}
            {renderAddServiceModal()}
        </Container>
        </div>
    )
}

export default Service;
