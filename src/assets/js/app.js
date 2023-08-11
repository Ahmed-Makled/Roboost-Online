
let swiper = new Swiper(".mySwiper", {

  pagination: {
    el: ".swiper-pagination",
  },
  spaceBetween: 6,
  breakpoints: {

  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
})



let tabs = document.querySelectorAll(".tabs_wrap ul li")
let Pre_Delivery = document.querySelectorAll(".Pre-Delivery")
let During_Delivery = document.querySelectorAll(".During-Delivery")
let Post_Delivery = document.querySelectorAll(".Post-Delivery")
let all = document.querySelectorAll(".item_wrap")

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active")
    })

    tab.classList.add("active")
    let tabval = tab.getAttribute("data-tabs")

    all.forEach((item) => {
      item.style.display = "none"
    })

    if (tabval == "Pre-Delivery") {
      Pre_Delivery.forEach((item) => {
        item.style.display = "block"
      })
    }
    else if (tabval == "During-Delivery") {
      During_Delivery.forEach((item) => {
        item.style.display = "block"
      })
    }
    else if (tabval == "Post-Delivery") {
      Post_Delivery.forEach((item) => {
        item.style.display = "block"
      })
    }


  })
})



const form = document.getElementById("book-demo-form")
const formMessage = document.getElementById("formMessage")
const successMessage = document.getElementById("successMessage")
const bookDemoContent = document.getElementById("book-demo-content")
form.addEventListener("submit", async (event) => {
  event.preventDefault()

  const DealName = form.elements.DealName.value
  const FirstName = form.elements.FirstName.value
  const LastName = form.elements.LastName.value
  const Email = form.elements.Email.value
  const Mobile = form.elements.Mobile.value
  const OrdersMonth = form.elements.OrdersMonth.value
  const CompanyName = form.elements.DealName.value
  const Description = form.elements.Description.value

  if (!DealName || !LastName || !Email || !Mobile || !OrdersMonth || !CompanyName) {
    formMessage.style.display = "block"
    return
  }

  var formData = new URLSearchParams()
  formData.append('xnQsjsdp', '3a48a8ab537fd4b92bc9bb73f9178dc6feaf35e714761a5e933e2b79888ba7c9')
  formData.append('zc_gad', '')
  // formData.append('planDigest', planDigestValue)
  formData.append('xmIwtLD', 'b91500abe59ee0b86ba6218aa9b8af437ff18142c57222f1a8b61fc11a6eb683')
  formData.append('actionType', 'UG90ZW50aWFscw==')
  formData.append('returnURL', null)
  formData.append('Potential Name', FirstName)
  formData.append('Contacts.First Name', FirstName)
  formData.append('Contacts.Last Name', LastName)
  formData.append('Contacts.Email', Email)
  formData.append('Contacts.Mobile', Mobile)
  formData.append('Accounts.Account Name', CompanyName)
  formData.append('Accounts.ACCOUNTCF53', OrdersMonth)
  formData.append('Accounts.Description', Description)
  formData.append('Pipeline', 'Sales Pipeline Standard')
  formData.append('Stage', 'Landing Page Lead')

  console.log(formData.toString())

  try {
    const response = await fetch("https://bigin.zoho.com/crm/WebForm", {
      method: "POST",
      body: formData,
    })
    console.log(response)
    if (response.ok && response.status === 200) {
      bookDemoContent.style.display = "none"
      successMessage.style.display = "flex"
      form.reset()
    } else {
      console.log("Error:", response.status)
    }
  } catch (error) {
    console.log("Error:", error)
  }
})

