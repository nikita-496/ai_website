function showModal(modalElem, backdrop) {
  modalElem.classList.add("show");
  backdrop.classList.remove("hidden");
  const phone = document.querySelector("#phone-modal");
  if (phone.value) {
    window.isValidPhone = true;
  } else {
    window.isValidPhone = false;
  }
}

function hideModal(modalElem, backdrop) {
  modalElem.classList.remove("show");
  backdrop.classList.add("hidden");
  const phone = document.querySelector("#phone");
  if (phone.value) {
    window.isValidPhone = true;
  } else {
    window.isValidPhone = false;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-cases", {
    // Optional parameters
    loop: true,
    centeredSlides: false,
    autoplay: {
      delay: 3000,
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-cases .swiper-button-next",
      prevEl: ".swiper-cases .swiper-button-prev",
    },

    slidesPerView: "auto",
    spaceBetween: 4,
    breakpoints: {
      767: {
        slidesPerView: 6,
        spaceBetween: 20,
        centeredSlides: false,
      },
    },
  });

  const swiper2 = new Swiper(".swiper-reviews ", {
    // Optional parameters
    // loop: true,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-reviews .swiper-button-next",
      prevEl: ".swiper-reviews .swiper-button-prev",
    },

    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });

  (function () {
    const backdrop = document.querySelector("#modal-backdrop");
    document.addEventListener("click", modalHandler);
    document
      .querySelector("#btn-success")
      .addEventListener("click", () =>
        hideModal(document.querySelector("#modal_2"), backdrop)
      );
    function modalHandler(evt) {
      const modalBtnOpen = evt.target.closest(".js-modal");
      if (modalBtnOpen) {
        // open btn click
        const modalSelector = modalBtnOpen.dataset.modal;
        showModal(document.querySelector(modalSelector), backdrop);
      }

      const modalBtnClose = evt.target.closest(".modal-close");
      if (modalBtnClose) {
        // close btn click
        evt.preventDefault();
        hideModal(modalBtnClose.closest(".modal-window"), backdrop);
      }

      if (evt.target.matches("#modal-backdrop")) {
        // backdrop click
        hideModal(document.querySelector(".modal-window.show"), backdrop);
      }
    }
  })();

  document.querySelectorAll(".card__swiper-container").forEach((n) => {
    const thumbs = new Swiper(n.querySelector(".mySwiper"), {
      slidesPerView: 2,
      spaceBetween: 10,
      watchSlidesProgress: true,
      slideToClickedSlide: true,
      loop: true,
      breakpoints: {
        767: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      },
    });
    const slider = new Swiper(n.querySelector(".mySwiper2"), {
      spaceBetween: 10,
      navigation: {
        nextEl: n.querySelector(".swiper-button-next"),
        prevEl: n.querySelector(".swiper-button-prev"),
      },
      thumbs: {
        swiper: thumbs,
      },
    });
  });

  const cards = document.querySelectorAll(".cases__carousel .swiper-slide");
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      console.log(card);
      //document.querySelector("body").classList.add("hidden");
      const cardAtr = card.getAttribute("data-swiper-slide-index");
      const cardModals = document.querySelectorAll(".card-modal");
      cardModals[cardAtr].classList.remove("hidden");
    });
  });

  $(".card__close").click(function () {
    $(".card-modal").addClass("hidden");
    $("body").removeClass("hidden");
  });

  $(".show-uno").click(function () {
    $(".card-uno").removeClass("hidden");
    //document.querySelector("body").classList.add("hidden");
  });
  $(".show-bdns").click(function () {
    $(".card-bdns").removeClass("hidden");
    //document.querySelector("body").classList.add("hidden");
  });
  $(".show-dwill").click(function () {
    $(".card-dwill").removeClass("hidden");
    //document.querySelector("body").classList.add("hidden");
  });

  $("#showSwapcaseCase").click(function () {
    $(".card-swapcase").removeClass("hidden");
    // document.querySelector("body").classList.add("hidden");
  });

  $("#showAmnextCase").click(function () {
    $(".card-amnext").removeClass("hidden");
    //document.querySelector("body").classList.add("hidden");
  });

  $("#showSpicyNetworkCase").click(function () {
    $(".card-spicy").removeClass("hidden");
    //document.querySelector("body").classList.add("hidden");
  });

  const inputFieldsForValidation = document.querySelectorAll("[type='tel']");
  inputFieldsForValidation.forEach((i) => {
    i.addEventListener("change", (e) => {
      const phone = e.target.value;
      const id = e.target.id;

      const code = window.code;
      const numberLength = Number(phoneBook[code.trim()]);

      if (phone.replace(/\D/g, "").length < numberLength) {
        document.querySelector(
          `${id === "phone" ? "#form-successmsg" : "#form-successmsg-modal"}`
        ).innerHTML = `Phone number must be ${numberLength} digits`;
      } else {
        document.querySelector(
          `${id === "phone" ? "#form-successmsg" : "#form-successmsg-modal"}`
        ).innerHTML = "";
      }
    });
  });

  const inputFieldPhoneForValidation = document.querySelector("#phone");
  const inputFieldPhoneFromModalForValidation =
    document.querySelector("#phone-modal");

  function hadnlePhoneInput(e) {
    // Разрешаем: backspace, delete, tab и escape
    if (
      event.keyCode == 46 ||
      event.keyCode == 8 ||
      event.keyCode == 9 ||
      event.keyCode == 27 ||
      // Разрешаем: Ctrl+A
      (event.keyCode == 65 && event.ctrlKey === true) ||
      // Разрешаем: home, end, влево, вправо
      (event.keyCode >= 35 && event.keyCode <= 39)
    ) {
      // Ничего не делаем
      return;
    } else {
      // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
      if (
        (event.keyCode < 48 || event.keyCode > 57) &&
        (event.keyCode < 96 || event.keyCode > 105)
      ) {
        event.preventDefault();
      }
    }
  }

  function validatePhone(e) {
    const phone = e.target.value;
    const id = e.target.id;
    // isToggleContry = false;
    const code = window.code;

    const numberLength = Number(phoneBook[code.trim()]);

    const submitForm = document.querySelector(
      `${id === "phone" ? "#submit" : "#submit-modal"}`
    );

    const reuqireSymbol = document.querySelector("#require-symbol");
    if (phone.length > 0 && id === "phone") {
      reuqireSymbol.style.display = "none";
    }
    if (phone.length === 0 && id === "phone") {
      reuqireSymbol.style.display = "inline-block";
    }
    if (String(phone).length > numberLength) {
      if (id === "phone") {
        inputFieldPhoneForValidation.value = String(phone).slice(
          0,
          numberLength
        );
      } else {
        inputFieldPhoneFromModalForValidation.value = String(phone).slice(
          0,
          numberLength
        );
      }
    }
    if (phone.replace(/\D/g, "").length < numberLength) {
      submitForm.classList.add("btn-default__disable");

      submitForm.setAttribute("disabled", "");
      window.isValidPhone = false;
    } else if (phone.replace(/\D/g, "").length === numberLength) {
      submitForm.classList.remove("btn-default__disable");

      document.querySelector(
        `${id === "phone" ? "#form-successmsg" : "#form-successmsg-modal"}`
      ).innerHTML = "";
      window.isValidPhone = true;
      submitForm.removeAttribute("disabled");
    }
  }

  inputFieldPhoneForValidation.addEventListener("keydown", (e) =>
    hadnlePhoneInput(e)
  );
  inputFieldPhoneFromModalForValidation.addEventListener("keydown", (e) =>
    hadnlePhoneInput(e)
  );

  inputFieldPhoneForValidation.addEventListener("input", (e) =>
    validatePhone(e)
  );

  inputFieldPhoneFromModalForValidation.addEventListener("input", (e) =>
    validatePhone(e)
  );

  const inputFieldEmailValidation = document.querySelector("#form-email");
  inputFieldEmailValidation.onblur = function () {
    document.querySelector("#form-successmsg").innerHTML = "";
  };
  inputFieldEmailValidation.addEventListener("input", (e) => {
    const email = e.target.value;
    const regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.length && window.isValidPhone) {
      submitForm.classList.remove("btn-default__disable");

      document.querySelector("#form-successmsg").innerHTML = "";
    } else if (!email.match(regex)) {
      submitForm.classList.add("btn-default__disable");

      document.querySelector("#form-successmsg").innerHTML =
        "Please provide a valid email address";
      submitForm.setAttribute("disabled", "");
    } else {
      submitForm.classList.remove("btn-default__disable");

      document.querySelector("#form-successmsg").innerHTML = "";
      submitForm.removeAttribute("disabled");
    }
  });

  async function validateForm(evt) {
    evt.preventDefault();
    const id = evt.target.id;
    if (!window.isValidPhone) {
      document.querySelector("#form-successmsg").innerHTML =
        "Please fill in all required fields correctly (*)";
      return;
    }

    const name = document.querySelector("#form-name").value;
    const text = document.querySelector("#form-textarea").value;
    const socialMedia = document.querySelector(
      `${id === "submit" ? "#form-selectbox" : "#form-selectbox-modal"}`
    ).selectedOptions[0].value;
    let contact;
    let payload;
    let dialcode;
    let email;

    if (socialMedia === "Whatsapp" || socialMedia === "Telegram") {
      dialcode = document.querySelector(
        `${id === "submit" ? "#dialcode" : "#dialcode-modal"}`
      ).innerHTML;
      contact = document.querySelector(
        `${id === "submit" ? "#phone" : "#phone-modal"}`
      ).value;
      email = document.querySelector("#form-email").value;
      payload =
        "Name: " +
        name +
        ", Preferred Social Media: " +
        socialMedia +
        ", Contact: " +
        dialcode +
        contact +
        ", Email: " +
        email +
        ", Text: " +
        text;
    } else {
      contact = document.querySelector("#form-contact").value;
      console.log(document.querySelector("#form-email"));
      email = document.querySelector("#form-email").value;
      payload =
        "Name: " +
        name +
        ", Preferred Social Media: " +
        socialMedia +
        ", Contact: " +
        contact +
        ", Email: " +
        email +
        ", Text: " +
        text;
    }

    if (contact && socialMedia) {
      console.log(contact && socialMedia);
      if (socialMedia === "Whatsapp" || socialMedia === "Telegram") {
        let pattern = new RegExp(
          /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/
        );

        if (pattern.test(dialcode + "" + contact) === false) {
          if (submitForm.getAttribute("data-translation") === "ru") {
            document.querySelector("#form-successmsg").innerHTML =
              'Пожалуйста, введите ваш номер телефона с префикс кодом страны включая знак "+", например: +66 123 456 78 90';
          } else {
            document.querySelector("#form-successmsg").innerHTML =
              'Please provide your phone number with the country code including the "+" sign, for example: +66 123 456 78 90';
          }
          document.querySelector("#phone").style.border = "1px solid #F2633F";
        } else {
          console.log(
            id === "submit" ? submitForm : submitFormFromModal,
            payload,
            name,
            text,
            socialMedia,
            dialcode,
            contact,
            email
          );

          sendFormTg(
            id === "submit" ? submitForm : submitFormFromModal,
            payload
          );
          sendForm(
            id === "submit" ? submitForm : submitFormFromModal,
            payload,
            name,
            text,
            socialMedia,
            dialcode,
            contact
          );
        }
      } else {
        let pattern =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (contact.match(pattern)) {
          sendFormTg(submitForm, payload);
          sendForm(submitForm, payload, name, text, socialMedia, 0, contact);
        } else {
          if (submitForm.getAttribute("data-translation") === "ru") {
            document.querySelector("#form-successmsg").innerHTML =
              "Пожалуйста, введите корректный email адрес";
          } else {
            document.querySelector("#form-successmsg").innerHTML =
              "Please provide a valid email address";
          }
          document.querySelector("#form-contact").style.border =
            "1px solid #F2633F";
        }
      }
    } else {
      if (socialMedia === "Email") {
        document.querySelector("#form-contact").style.border =
          "1px solid #F2633F";
      } else {
        document.querySelector("#phone").style.border = "1px solid #F2633F";
      }
    }
  }

  const submitForm = document.querySelector("#submit");
  const submitFormFromModal = document.querySelector("#submit-modal");
  submitForm.addEventListener("click", async (evt) => await validateForm(evt));
  submitFormFromModal.addEventListener(
    "click",
    async (evt) => await validateForm(evt)
  );

  const imgsForPreview = document.querySelectorAll(
    "#fullscreen-preview-available"
  );
  const preview = document.querySelector("#fullpage");

  imgsForPreview.forEach((img) => {
    img.addEventListener("click", () => {
      preview.style.backgroundImage = "url(" + img.src + ")";
      preview.style.display = "block";
    });
  });
});

async function sendForm(
  submitForm,
  payload,
  name,
  text,
  socialMedia,
  dialcode,
  contact
) {
  console.log(payload);
  try {
    const response = await fetch(`https://api.teckone.space/sendMessage`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: "-1001934018673",
        name: name,
        contact_type: socialMedia,
        contact: dialcode ? dialcode + contact : contact,
        text: text,
      }),
    });
    console.log("data sent, response: ", response);

    if (submitForm.getAttribute("data-translation") === "ru") {
      document.querySelector("#form-successmsg").innerHTML =
        "Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время!";
    } else {
      document.querySelector("#form-successmsg").innerHTML =
        "Thank you! Your message has been sent. We will contact you shortly!";
    }
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

async function sendForm(
  submitForm,
  payload,
  name,
  text,
  socialMedia,
  dialcode,
  contact
) {
  console.log(payload);
  try {
    const response = await fetch(`https://api.teckone.space/sendMessage`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: "-1001934018673",
        name: name,
        contact_type: socialMedia,
        contact: dialcode ? dialcode + contact : contact,
        text: text,
      }),
    });
    console.log("data sent, response: ", response);
    if (submitForm.id === "submit") {
      if (submitForm.getAttribute("data-translation") === "ru") {
        document.querySelector("#form-successmsg").innerHTML =
          "Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время!";
      } else {
        document.querySelector("#form-successmsg").innerHTML =
          "Thank you! Your message has been sent. We will contact you shortly!";
      }
    } else {
      const backdrop = document.querySelector("#modal-backdrop");
      hideModal(document.querySelector("#modal_1"), backdrop);
      showModal(document.querySelector("#modal_2"), backdrop);
    }
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

async function sendFormTg(submitForm, payload) {
  console.log(payload);
  try {
    const response = await fetch(
      `https://api.telegram.org/bot6114804487:AAEA_7_WXXXMMiy57wLpy79OQ0C0QfF5RQ0/sendMessage`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ chat_id: "-1001934018673", text: payload }),
      }
    );
    console.log("data sent, response: ", response);
    console.log(submitForm.id);
    if (submitForm.id === "submit") {
      if (submitForm.getAttribute("data-translation") === "ru") {
        document.querySelector("#form-successmsg").innerHTML =
          "Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время!";
      } else {
        document.querySelector("#form-successmsg").innerHTML =
          "Thank you! Your message has been sent. We will contact you shortly!";
      }
    } else {
      console.log(document.querySelector("#modal_1"));
      const backdrop = document.querySelector("#modal-backdrop");
      hideModal(document.querySelector("#modal_1"), backdrop);
      showModal(document.querySelector("#modal_2"), backdrop);
    }
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}
