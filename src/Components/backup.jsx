// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { Table } from "react-bootstrap";
// import { Form } from "react-bootstrap";
// import "./AddProperty.css";
// import { useSelector } from "react-redux";
// import { modules } from "../../Modules/Modules.reducers";
// import Dropdown from "../../Compnents/Dropdown/Dropdown";

// function AddProperty() {
//   const data = useSelector((state) => state.modules);
//   console.log(data, "DATA");
//   const options = [
//     { label: "Option 1" },
//     { label: "Option 2" },
//     { label: "Option 3" },
//   ];

//   return (
//     <>
//       <Container fluid style={{ marginLeft: "40px" }}>
//         <Row className="justify-content-md-center">
//           <Col md="auto">
//             <Table striped bordered hover>
//               <thead>
//                 <tr>
//                   <th>Property Information</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="inputname">Main Type</td>
//                   <td className="inputnameValue">
//                     <Dropdown options={options} />
//                   </td>
//                   <td className="inputname">Property Type </td>
//                   <td className="inputnameValue">
//                     <Form.Select className="costum-select">
//                       <option>Option A</option>
//                       <option>Option B</option>
//                       <option>Option C</option>
//                     </Form.Select>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="inputname">Availability</td>
//                   <td className="inputnameValue">
//                     <Form.Select className="costum-select">
//                       <option>Option 1</option>
//                       <option>Option 2</option>
//                       <option>Option 3</option>
//                     </Form.Select>
//                   </td>
//                   <td className="inputname">Status</td>
//                   <td className="inputnameValue">
//                     <Form.Select className="costum-select">
//                       <option>Option A</option>
//                       <option>Option B</option>
//                       <option>Option C</option>
//                     </Form.Select>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="inputname">Publish to portal</td>
//                   <td className="inputnameValue">
//                     <Form.Check type="checkbox" />
//                   </td>
//                   <td className="inputname">Furnished</td>
//                   <td className="inputnameValue">
//                     <Form.Select className="costum-select">
//                       <option>Option A</option>
//                       <option>Option B</option>
//                       <option>Option C</option>
//                     </Form.Select>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="inputname">Elevator </td>
//                   <td className="inputnameValue">
//                     <Form.Select className="costum-select">
//                       <option>Option 1</option>
//                       <option>Option 2</option>
//                       <option>Option 3</option>
//                     </Form.Select>
//                   </td>
//                 </tr>
//               </tbody>
//               <thead>
//                 <tr>
//                   <th>Property Location</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="inputname">Country</td>
//                   <td className="inputnameValue">
//                     <Form.Select className="costum-select">
//                       <option>Option 1</option>
//                       <option>Option 2</option>
//                       <option>Option 3</option>
//                     </Form.Select>
//                   </td>
//                   <td className="inputname">Division</td>
//                   <td className="inputnameValue">
//                     <Form.Select className="costum-select">
//                       <option>Option A</option>
//                       <option>Option B</option>
//                       <option>Option C</option>
//                     </Form.Select>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="inputname">City</td>
//                   <td className="inputnameValue">
//                     <Form.Select className="costum-select">
//                       <option>Option 1</option>
//                       <option>Option 2</option>
//                       <option>Option 3</option>
//                     </Form.Select>
//                   </td>
//                   <td className="inputname">Zone</td>
//                   <td className="inputnameValue">
//                     <Form.Select className="costum-select">
//                       <option>Option A</option>
//                       <option>Option B</option>
//                       <option>Option C</option>
//                     </Form.Select>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="inputname">Address</td>
//                   <td className="inputnameValue">
//                     <Form.Control type="text" className="costum-input" />
//                   </td>
//                   <td className="inputname">Zip Code</td>
//                   <td className="inputnameValue">
//                     <Form.Control type="text" className="costum-input" />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="inputname">Floor </td>
//                   <td className="inputnameValue">
//                     <Form.Control type="text" className="costum-input" />
//                   </td>
//                   <td className="inputname">Floors </td>
//                   <td className="inputnameValue">
//                     <Form.Control type="text" className="costum-input" />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="inputname">Latitude </td>
//                   <td className="inputnameValue">
//                     <Form.Control type="text" className="costum-input" />
//                   </td>
//                   <td className="inputname">Longitude </td>
//                   <td className="inputnameValue">
//                     <Form.Control type="text" className="costum-input" />
//                   </td>
//                 </tr>

//                 <tr>
//                   <td className="inputname">Publish Georeference</td>
//                   <td className="inputnameValue">
//                     <Form.Check type="checkbox" />
//                   </td>
//                 </tr>
//               </tbody>
//               <thead>
//                 <tr>
//                   <th>Property Price</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="inputname">Bussiness Type</td>
//                   <td className="inputnameValue">
//                     <Form.Select className="costum-select">
//                       <option>Option 1</option>
//                       <option>Option 2</option>
//                       <option>Option 3</option>
//                     </Form.Select>
//                   </td>
//                   <td className="inputname">Price</td>
//                   <td className="inputnameValue-euro">
//                     <div className="input-with-symbol">
//                       <span className="currency-symbol">€</span>
//                       <Form.Control type="text" className="costum-input-euro" />
//                     </div>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="inputname">Price for m2</td>
//                   <td className="inputnameValue-euro">
//                     <div className="input-with-symbol">
//                       <span className="currency-symbol">€</span>
//                       <Form.Control type="text" className="costum-input-euro" />
//                     </div>
//                   </td>
//                   <td className="inputname">Cmimi sipas kerkeses</td>
//                   <td className="inputnameValue">
//                     <Form.Check type="checkbox" />
//                   </td>
//                 </tr>
//               </tbody>
//               <thead>
//                 <tr>
//                   <th>Property Areas</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="inputname">Interior Area </td>
//                   <td className="inputnameValue">
//                     <Form.Control type="text" className="costum-input" />
//                   </td>
//                   <td className="inputname">Gros Area</td>
//                   <td className="inputnameValue">
//                     <Form.Control type="text" className="costum-input" />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="inputname">Land Area for m2</td>
//                   <td className="inputnameValue">
//                     <Form.Control type="text" className="costum-input" />
//                   </td>
//                   <td className="inputname">Balcony Area</td>

//                   <td className="inputnameValue">
//                     <Form.Control type="text" className="costum-input" />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="inputname">Common Area</td>

//                   <td className="inputnameValue">
//                     <Form.Control type="text" className="costum-input" />
//                   </td>
//                 </tr>
//               </tbody>
//               <thead>
//                 <tr>
//                   <th>Property Divisions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="inputname">Living Romm </td>
//                   <td className="inputnameValue">
//                     <Form.Control type="text" className="costum-input" />
//                   </td>
//                   <td className="inputname">Kitchen</td>
//                   <td className="inputnameValue">
//                     <Form.Control type="text" className="costum-input" />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="inputname">Bedrooms</td>
//                   <td className="inputnameValue">
//                     <Form.Control type="text" className="costum-input" />
//                   </td>
//                   <td className="inputname">Bathrooms</td>

//                   <td className="inputnameValue">
//                     <Form.Control type="text" className="costum-input" />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="inputname">Other Rooms</td>

//                   <td className="inputnameValue">
//                     <Form.Control type="text" className="costum-input" />
//                   </td>
//                 </tr>
//               </tbody>
//               <thead>
//                 <tr>
//                   <th>Property Features</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="inputname">Surroundings </td>
//                   <td className="inputnameValue">
//                     <Form.Select className="costum-select">
//                       <option> </option>
//                     </Form.Select>
//                   </td>
//                   <td className="inputname">With View To</td>
//                   <td className="inputnameValue">
//                     <Form.Select className="costum-select">
//                       <option></option>
//                     </Form.Select>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="inputname">Equipments</td>
//                   <td className="inputnameValue">
//                     <Form.Select className="costum-select">
//                       <option></option>
//                     </Form.Select>
//                   </td>
//                   <td className="inputname">Infrastructures</td>

//                   <td className="inputnameValue">
//                     <Form.Select className="costum-select">
//                       <option></option>
//                     </Form.Select>
//                   </td>
//                 </tr>
//               </tbody>
//               <thead>
//                 <tr>
//                   <th>Property Owner</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="inputname">Owner </td>
//                   <td className="inputnameValue">
//                     <Form.Control
//                       type="text"
//                       className="costum-input"
//                       placeholder="Type to search"
//                     />
//                   </td>
//                   <td className="inputname">Assigned To</td>
//                   <td className="inputnameValue">
//                     <Form.Control
//                       type="text"
//                       className="costum-input"
//                       placeholder="BSP Administrator"
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="inputname">Last Modified By</td>
//                   <td className="inputnameValue">
//                     <Form.Control type="text" className="costum-input" />
//                   </td>
//                 </tr>
//               </tbody>
//               <thead>
//                 <tr>
//                   <th>Property Other</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="inputname">Has Mortage </td>
//                   <td className="inputnameValue">
//                     <Form.Select className="costum-select">
//                       <option> </option>
//                     </Form.Select>
//                   </td>
//                   <td className="inputname">Deed</td>
//                   <td className="inputnameValue">
//                     <Form.Select className="costum-select">
//                       <option></option>
//                     </Form.Select>
//                   </td>
//                 </tr>
//               </tbody>
//             </Table>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default AddProperty;
