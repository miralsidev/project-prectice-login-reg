// import React from 'react';

// const Product = ({ imageUrl, name, amount, description }) => {
//   const handlePayment = async (e) => {
//     e.preventDefault();

//     const formData = { name, amount, description };

//     try {
//       const response = await fetch('http://localhost:5000/payment/payment', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       const res = await response.json();

//       if (res.success) {
//         const options = {
//           key: res.key_id,
//           amount: res.amount,
//           currency: 'INR',
//           name: res.product_name,
//           description: res.description,
//           image: 'https://dummyimage.com/600x400/000/fff',
//           order_id: res.order_id,
//           handler: function (response) {
//             alert('Payment Succeeded');
//             // window.open("/","_self")
//           },
//           prefill: {
//             contact: res.contact,
//             name: res.name,
//             email: res.email
//           },
//           notes: {
//             description: res.description
//           },
//           theme: {
//             color: '#2300a3'
//           }
//         };

//         const razorpayObject = new window.Razorpay(options);
//         razorpayObject.on('payment.failed', function (response) {
//           alert('Payment Failed');
//         });
//         razorpayObject.open();
//       } else {
//         alert(res.msg);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div style={{ display: 'inline-block', margin: '10px', textAlign: 'center' }}>
//       <img src={imageUrl} alt={name} width="100px" height="100px" />
//       <p>{name}</p>
//       <p><b>Amount: Rs. {amount}</b></p>
//       <form onSubmit={handlePayment}>
//         <input type="hidden" name="name" value={name} />
//         <input type="hidden" name="amount" value={amount} />
//         <input type="hidden" name="description" value={description} />
//         <input type="submit" value="Pay Now" />
//       </form>
//     </div>
//   );
// };

// export default Product
