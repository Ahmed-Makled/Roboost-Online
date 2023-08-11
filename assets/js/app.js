
// Initialize Swiper
let swiper = new Swiper(".mySwiper", {
  // autoplay: {
  //   delay: 1000,
  //   disableOnInteraction: false
  // },
  pagination: {
    el: ".swiper-pagination",
  },
  spaceBetween: 6,
  breakpoints: {
    // 1600: {
    //   slidesPerView: 8,
    //   spaceBetween: 25
    // },
    // 1200: {
    //   slidesPerView: 7,
    //   spaceBetween: 25
    // },
    // 993: {
    //   slidesPerView: 6,
    //   spaceBetween: 20
    // },
    // 800: {
    //   slidesPerView: 5,
    //   spaceBetween: 20
    // },
    // 600: {
    //   slidesPerView: 4,
    //   spaceBetween: 20
    // },
    // 500: {
    //   slidesPerView: 3,
    //   spaceBetween: 40
    // },

    // 300: {
    //   slidesPerView: 2,

    // }
  },

  // loop: false
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



let tabs = document.querySelectorAll(".tabs_wrap ul li");
let Pre_Delivery = document.querySelectorAll(".Pre-Delivery");
let During_Delivery = document.querySelectorAll(".During-Delivery");
let Post_Delivery = document.querySelectorAll(".Post-Delivery");
let all = document.querySelectorAll(".item_wrap");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    })

    tab.classList.add("active");
    let tabval = tab.getAttribute("data-tabs");

    all.forEach((item) => {
      item.style.display = "none";
    })

    if (tabval == "Pre-Delivery") {
      Pre_Delivery.forEach((item) => {
        item.style.display = "block";
      })
    }
    else if (tabval == "During-Delivery") {
      During_Delivery.forEach((item) => {
        item.style.display = "block";
      })
    }
    else if (tabval == "Post-Delivery") {
      Post_Delivery.forEach((item) => {
        item.style.display = "block";
      })
    }


  })
})



const form = document.getElementById("book-demo-form");
const formMessage = document.getElementById("formMessage");
const successMessage = document.getElementById("successMessage");
const bookDemoContent = document.getElementById("book-demo-content");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  // fetch('https://bigin.zoho.com/crm/WebformScriptServlet?rid=b91500abe59ee0b86ba6218aa9b8af437ff18142c57222f1a8b61fc11a6eb683gid3a48a8ab537fd4b92bc9bb73f9178dc6feaf35e714761a5e933e2b79888ba7c9')
  //   .then(response => response.text())
  //   .then(data => {
  //     console.log(data);
  //     // Process the response data here
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //   });
  // var planDigestInput = document.querySelector('input[name="planDigest"]');

  // // Get the value of the "planDigest" input
  // var planDigestValue = planDigestInput.value;

  // console.log(planDigestValue);


  const DealName = form.elements.DealName.value;
  const FirstName = form.elements.FirstName.value;
  const LastName = form.elements.LastName.value;
  const Email = form.elements.Email.value;
  const Mobile = form.elements.Mobile.value;
  const OrdersMonth = form.elements.OrdersMonth.value;
  const CompanyName = form.elements.DealName.value;
  const Description = form.elements.Description.value;

  if (!DealName || !LastName || !Email || !Mobile || !OrdersMonth || !CompanyName) {
    formMessage.style.display = "block";
    return;
  }

  var formData = new URLSearchParams();
  formData.append('xnQsjsdp', '3a48a8ab537fd4b92bc9bb73f9178dc6feaf35e714761a5e933e2b79888ba7c9');
  formData.append('zc_gad', '');
  // formData.append('planDigest', planDigestValue);
  formData.append('xmIwtLD', 'b91500abe59ee0b86ba6218aa9b8af437ff18142c57222f1a8b61fc11a6eb683');
  formData.append('actionType', 'UG90ZW50aWFscw==');
  formData.append('returnURL', null);
  formData.append('Potential Name', FirstName);
  formData.append('Contacts.First Name', FirstName);
  formData.append('Contacts.Last Name', LastName);
  formData.append('Contacts.Email', Email);
  formData.append('Contacts.Mobile', Mobile);
  formData.append('Accounts.Account Name', CompanyName);
  formData.append('Accounts.ACCOUNTCF53', OrdersMonth);
  formData.append('Accounts.Description', Description);
  formData.append('Pipeline', 'Sales Pipeline Standard');
  formData.append('Stage', 'Landing Page Lead');

  console.log(formData.toString());

  try {
    const response = await fetch("https://bigin.zoho.com/crm/WebForm", {
      method: "POST",
      body: formData,
    });
    console.log(response);
    if (response.ok && response.status === 200) {
      bookDemoContent.style.display = "none";
      successMessage.style.display = "flex";
      form.reset();
    } else {
      console.log("Error:", response.status);
    }
  } catch (error) {
    console.log("Error:", error);
  }
});




// var mndFileds = new Array('Potential\x20Name', 'Contacts.Last\x20Name', 'Accounts.Account\x20Name', 'Accounts.ACCOUNTCF53');
// var fldLangVal = new Array('Deal\x20Name', 'Last\x20Name', 'Company\x20Name', 'Orders\x2FMonth');
// var wfInnerWidth = window.innerWidth;
// if (wfInnerWidth <= 768) {
//   document.forms['BiginWebToRecordForm5638101000000475025'].setAttribute('data-ux-form-alignment', 'top');
// }
// var name = '';
// var email = '';
// function removeError(fieldObj) {
//   var parentElement = fieldObj.parentElement.parentElement,
//     childEle = parentElement.getElementsByClassName('wf-field-error')[0];
//   if (childEle) {
//     parentElement.classList.remove('wf-field-error-active');
//     parentElement.removeChild(parentElement.getElementsByClassName('wf-field-error')[0]);
//   }
// }
// function setError(fieldObj, label) {
//   var parentElement = fieldObj.parentElement.parentElement,
//     childEle = parentElement.getElementsByClassName('wf-field-error')[0];
//   if (!childEle) {
//     var spanEle = document.createElement('SPAN');
//     spanEle.setAttribute('class', 'wf-field-error');
//     spanEle.innerHTML = label;
//     parentElement.append(spanEle);
//     parentElement.classList.add('wf-field-error-active');
//   }
// }
// function validateFields5638101000000475025() {
//   var isReturn = true;
//   var form = document.forms['BiginWebToRecordForm5638101000000475025'];
//   var validateFld = form.querySelectorAll('[fvalidate=true]');
//   var i;
//   for (i = 0; i < validateFld.length; i++) {
//     var validateFldVal = validateFld[i].value;
//     if (validateFldVal !== '') {
//       var fLabel = validateFld[i].parentElement.parentElement.parentElement.getElementsByClassName('wf-label')[0].innerHTML;
//       switch (validateFld[i].getAttribute('ftype')) {
//         case 'email':
//           if (validateFldVal.match(/^([A-Za-z0-9._%-'+/]+@[A-Za-z0-9.-]+.[a-zA-Z]{2,22})$/) === null) {
//             setError(validateFld[i], 'Enter valid ' + fLabel);
//             isReturn = false;
//           }
//           break;
//         case 'number':
//           if (validateFldVal.match(/^[0-9]+$/) === null) {
//             setError(validateFld[i], 'Enter valid ' + fLabel);
//             isReturn = false;
//           }
//           break;
//         case 'double':
//           if (validateFldVal.match(/^[0-9]*(\.[0-9]{0,2})?$/) === null) {
//             setError(validateFld[i], 'Enter valid ' + fLabel);
//             isReturn = false;
//           }
//           break;
//         case 'mobile':
//           if (validateFldVal.match(/^[0-9a-zA-Z+.()\-;\s]+$/) === null) {
//             setError(validateFld[i], 'Enter valid ' + fLabel);
//             isReturn = false;
//           }
//           break;
//       }
//     }
//   }
//   return isReturn;
// }

// function checkMandatory5638101000000475025() {
//   var isReturn = true;
//   for (i = 0; i < mndFileds.length; i++) {
//     var fieldObj = document.forms['BiginWebToRecordForm5638101000000475025'][mndFileds[i]];
//     if (fieldObj) {
//       if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length == 0) {
//         if (fieldObj.type == 'file') {
//           setError(fieldObj, 'Please select a file to upload.');
//           isReturn = false;
//         }
//         setError(fieldObj, fldLangVal[i] + ' cannot be empty');
//         isReturn = false;
//       } else if (fieldObj.nodeName == 'SELECT') {
//         if (fieldObj.options[fieldObj.selectedIndex].value == '-None-') {
//           setError(fieldObj, fldLangVal[i] + ' cannot be none.');
//           isReturn = false;
//         }
//       } else if (fieldObj.type == 'checkbox') {
//         if (fieldObj.checked == false) {
//           setError(fieldObj, 'Please accept  ' + fldLangVal[i]);
//           isReturn = false;
//         }
//       }
//       try {
//         if (fieldObj.name == 'Last Name') {
//           name = fieldObj.value;
//           console.log(fieldObj.value);
//         }
//       } catch (e) { }
//     }
//   }
//   if (!validateFields5638101000000475025()) { isReturn = false; }
//   if (!isReturn) {
//     var errEle = document.getElementsByClassName('wf-field-error');
//     if (errEle && errEle.length > 0) {
//       var inputEle = errEle[0].parentElement.getElementsByTagName('input');
//       if (inputEle && inputEle.length == 0) {
//         inputEle = errEle[0].parentElement.getElementsByTagName('select');
//       }
//       if (inputEle && inputEle.length > 0) {
//         inputEle[0].focus();
//       }
//     }
//   }
//   return isReturn;
// }



// var formname = document.BiginWebToRecordForm;
// if (!formname) {
//   formname = document.BiginWebToRecordForm5638101000000475025
// }
// if (!formname) {
//   formname = document.BiginWebToContactForm5638101000000475025
// }
// if (!formname) {
//   formname = document.WebToContacts5638101000000475025
// }
// formname.action = 'https://bigin.zoho.com/crm/WebForm';

// function validateForm() {
//   return validateForm5638101000000475025();
// }

// async function validateForm5638101000000475025() {
//   console.log('object');
//   if ((typeof checkMandatory !== 'undefined' && checkMandatory()) || (typeof checkMandatory5638101000000475025 !== 'undefined' && checkMandatory5638101000000475025())) {
//     var formname = document.BiginWebToRecordForm;
//     if (!formname) {
//       formname = document.BiginWebToRecordForm5638101000000475025
//     }
//     var formData = new URLSearchParams();
//     formData.append('xnQsjsdp', '3a48a8ab537fd4b92bc9bb73f9178dc6feaf35e714761a5e933e2b79888ba7c9');
//     formData.append('zc_gad', '');
//     formData.append('planDigest', '7n45x2');
//     formData.append('xmIwtLD', 'b91500abe59ee0b86ba6218aa9b8af437ff18142c57222f1a8b61fc11a6eb683');
//     formData.append('actionType', 'UG90ZW50aWFscw==');
//     formData.append('returnURL', null);
//     formData.append('Potential Name', 'Cody Crane2');
//     formData.append('Contacts.Last Name', 'Brewer');
//     formData.append('Contacts.Email', 'wesedu@mailinator.com');
//     formData.append('Contacts.Mobile', 'Reprehenderit necessitatibus e');
//     formData.append('Accounts.Account Name', 'Xantha Duffy');
//     formData.append('Accounts.ACCOUNTCF53', '23');
//     formData.append('Pipeline', 'Sales Pipeline Standard');
//     formData.append('Stage', 'Lead');

//     console.log(formData.toString());

//     try {
//       const response = await fetch("https://bigin.zoho.com/crm/WebForm", {
//         method: "POST",
//         body: formData,
//       });
//       console.log(response);
//       if (response.ok && response.status === 200) {
//         // bookDemoContent.style.display = "none";
//         // successMessage.style.display = "flex";
//         form.reset();
//       } else {
//         console.log("Error:", response.status);
//       }
//     } catch (error) {
//       console.log("Error:", error);
//     }
//     // formname.submit();
//   } else {
//     event.preventDefault();
//     return false;
//   }
// }