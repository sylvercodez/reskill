<template>
<div class="box-par">
  <div class="wrapper container q-pt-xl">
     <div class="eight q-my-lg">
      <h4 class="header-text">Enroll Now</h4>
    </div>
    <div class="error" v-if="inputErr">
      {{ inputErr }}
    </div>
    <form @submit.prevent="submit" class="form-box">

      <div class="input-wrap">
        <label class="form-det" for="">Full Name</label> <br />

        <div class="input">
          <i class="ri-user-fill q-mr-md icon-enroll"></i>

          <input
            disabled
            name="name"
            type="text"
            v-model="form.name"
            placeholder="Ademola"
          />
        </div>
      </div>
      
      <div class="input-wrap">
        <label class="form-det" for="">Email</label> <br />

        <div class="input">
          <i class="ri-mail-line q-mr-md icon-enroll"></i>

          <input
            disabled
            type="email"
            name="email"
            v-model="form.email"
            placeholder="Enter your email"
          />
        </div>
        <span class="error">{{ emailError }}</span>
      </div>

      <div class="input-wrap">
        <label class="form-det" for="">Linkedin Profile URL</label> <br />

        <div class="input">
          <i class="ri-shield-user-fill q-mr-md icon-enroll"></i>

          <input
            disabled
            type="text"
            name="linkedin_url"
            id="te"
            v-model="form.linkedin_url"
          />
        </div>
      </div>


      <div class="two">
        <div class="input-wrap">
          <label class="form-det" for=""
            >City, State of Residence (e.g. Seattle, WA)
          </label>
          <br />

          <div class="input">
            <i class="ri-time-fill q-mr-md icon-enroll"></i>

            <input
              type="text"
              name="timezone"
              v-model="timezone"
              placeholder=""
            />
          </div>
          <span class="error">{{ timezoneErr }}</span>
        </div>
        <div class="input-wrap">
          <label class="form-det" for="">Phone Number</label> <br />

          <div class="input">
            <i class="ri-phone-fill q-mr-md icon-enroll"></i>

            <input
              type="text"
              name="phone"
              v-model="phone"
              placeholder=""
            />
          </div>
          <span class="error">{{ phoneErr }}</span>
        </div>
      </div>

      <div class="two">
        <div class="input-wrap">
          <label class="form-det" for="">Minority Representation: I identify as</label>
          <br />

          <div class="input">
            <i class="ri-apps-fill q-mr-md icon-enroll"></i>

            <select name="representation" v-model="representation" id="">
              <option value="native american">Native American</option>
              <option value="alaska native">Alaska Native</option>
              <option value="black">Black</option>
              <option value="hispanic">Hispanic</option>
              <option value="pacific islander">Pacific Islander</option>
              <option value="southeast asian">Southeast Asian</option>
            </select>
          </div>
          <span class="error">{{ representationErr }}</span>
        </div>
        <div class="input-wrap">
          <label class="form-det" for="">Gender</label>
          <br />

          <div class="input">
            <i class="ri-group-line q-mr-md icon-enroll"></i>

            <select name="gender" v-model="gender" id="">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non binary">Non Binary</option>
              <option value="prefer not to say">Prefer not to say</option>
            </select>
          </div>
          <span class="error">{{ genderErr }}</span>
        </div>
      </div>
      <div class="two">
        <div class="input-wrap">
          <label class="form-det" for="">Age Group</label>
          <br />

          <div class="input">
            <i class="ri-calendar-fill q-mr-md icon-enroll"></i>

            <select name="age_group" v-model="age_group" id="">
              <option value="18 - 24">18 - 24</option>
              <option value="25 - 34">25 - 34</option>
              <option value="35 - 44">35 - 44</option>
              <option value="45 - above">45 - above</option>
            
            </select>
          </div>
          <span class="error">{{ age_groupErr }}</span>
        </div>
        <div class="input-wrap">
          <label class="form-det" for="">Current Employment Status</label>
          <br />

          <div class="input">
            <i class="ri-star-fill q-mr-md icon-enroll"></i>

            <select name="employment_status" v-model="employment_status" id="">
              <option value="Employed full-time">Employed full-time</option>
              <option value="Employed part-time">Employed part-time</option>
              <option value="Self-employed ">Self-employed</option>
              <option value="Unemployed">Unemployed</option>
            </select>
          </div>
          <span class="error"> {{ employment_statusErr }}</span>
        </div>
      </div>

        <div class="input-wrap">
          <label class="form-det" for=""
            >Highest level of school completed:
          </label>
          <br />

          <div class="input">
            <i class="ri-book-fill q-mr-md icon-enroll"></i>

            <select name="highest_school" v-model="highest_school" id="">
              <option value="No diploma">No diploma</option>
              <option value="High school ">High school</option>
              <option value="College – no degree">Some college</option>
              <option value="Trade/technical/vocational training">
                Trade/technical/vocational training
              </option>
              <option value="Associate Degree">Associate Degree</option>

              <option value="Bachelor’s Degree">
                Bachelor’s Degree (list major)
              </option>

              <option value="Master’s Degree">
                Master’s Degree (list major)
              </option>
              <option value="Post-graduate study">Post-graduate study</option>
            </select>
          </div>
          <span class="error">{{ highest_schoolErr }}</span>
        </div>
          <div class="input-wrap">
          <label class="form-det" for="">Field of study, if any (e.g. Nursing, Education or Cosmetology, etc.) </label>
          <br />

          <div class="input">
            <i class="ri-book-fill q-mr-md icon-enroll"></i>
            <input
              type="text"
              name="list_amjor"
              v-model="list_amjor"
              placeholder=""
            />
          </div>
          <span class="error">{{ listmajorErr }}</span>


      </div>


  <div class="input-wrap">
          <label class="form-det" for=""
            >Are you authorized to legally work in the U.S.?
          </label>
          <br />
          <div class="input">
            <i class="ri-flag-fill q-mr-md icon-enroll"></i>

            <select name="can_work_in_usa" v-model="can_work_in_usa" id="">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <span class="error">{{ can_work_in_usaErr }}</span>
        </div>

        <div class="input-wrap">
          <label class="form-det" for=""
            >Which learning track are you considering?
          </label>
          <br />

          <div class="input">
            <i class="ri-bookmark-fill q-mr-md icon-enroll"></i>

            <select name="learning_track" v-model="learning_track" id="">
              <option value="Full-Stack Web Development">
                Full-Stack Web Development
              </option>
              <option value="UI/UX Product Design">UI/UX Product Design</option>
              <option value="Undecided “Learner Category">
                I haven't decided yet “Learner Category”?
              </option>
            </select>
          </div>
          <span class="error">{{ learning_trackErr }}</span>
        </div>
        <div class="input-wrap">
          <label class="form-det" for=""
            >Which best describes your tech experience:
          </label>
          <br />

          <div class="input">
            <i class="ri-inbox-fill q-mr-md icon-enroll"></i>

            <select name="tech_experience" v-model="tech_experience" id="">
              <option value="No experience">
              No experience
              </option>
              <option value="Some experience/novice">
               Some experience/novice/self-learner

              </option>
              <option value=" Experienced/advanced beginner">
               Experienced/advanced beginner
              </option>
            </select>
          </div>
          <span class="error">{{ tech_experienceErr }}</span>
        </div>


        <div class="input-wrap">
          <label class="form-det" for=""
            >How many hours per week are you able to commit to this program
            (dedicated to learning, doing assignments, and peer/instructor
            interaction)
            over the seven months you are enrolled?
          </label>
          <br />

          <div class="input">
            <i class="ri-timer-fill q-mr-md icon-enroll"></i>

            <select name="hours_per_week" v-model="hours_per_week" id="">
              <option value="15 hours per week">
                15 hours per week (minimum)
              </option>
              <option value="16 - 24 hours per week">
                16 - 24 hours per week
              </option>
              <option value="25 - 40 hours per week">
                25 - 40 hours per week
              </option>
            </select>
          </div>
          <span class="error">{{ hours_per_weekErr }}</span>
        </div>


        <div class="input-wrap">
          <label class="form-det" for="">
            How did you hear about us?
          </label>
          <br />

          <div class="input">
            <i class="ri-funds-line q-mr-md icon-enroll"></i>

            <select name="referral" v-model="referral" id="">
              <option value="Social media">Social media</option>
              <option value="Google or another search engine">
                Google or another search engine
              </option>
              <option value="Friend/Family/Word of Mouth">
                Friend/Family/Word of Mouth
              </option>
              <option value="News Outlet">News Outlet</option>
              <option value="Others">Other</option>
            </select>
          </div>
          <span class="error">{{ referralErr }}</span>
        </div>
<div style="display: flex; align-items:center; margin-top:12px;">
<input type="checkbox" style="margin-right: 17px;"> <label class="form-det" for="">By submitting this Enrollment Application, you acknowledge that you are currently 18 years of age and that you agree to our <a href="https://reskillamericans.org/terms-of-service" target="_blank">Terms of Service</a> and our <a href="https://reskill-learning.web.app/privacy" target="_blank">Privacy Policy</a> </label> </div>
      <div class="button q-py-md q-mt-sm text-center">
        <!-- <button class="btn">Register</button> -->
        <q-btn type="submit" class="btn buttonss ">Enroll</q-btn>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import { useQuasar, QSpinnerFacebook } from "quasar";
import { onBeforeUnmount } from "vue";
import { QSpinnerGears } from "quasar";
import { useField, useForm } from "vee-validate";
import axios from "axios";

export default {
  setup() {
    const $q = useQuasar();
    let timer;

    onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer);
        $q.loading.hide();
      }
    });

    const simpleSchema = {
      timezone(value) {
        if (!value) {
          return "this field is required";
        }
        return true;

        // validate email value and return messages...
      },
      phone(value) {
        if (value.length < 8) {
          return "this field must contain at least 8 characters";
        }

        return true;
        // validate name value and return messages...
      },
      representation(value) {
        if (!value) {
          return "this field is required";
        }
        return true;

        // validate name value and return messages...
      },
      age_group(value) {
        if (!value) {
          return "this field is required";
        }

        return true;

        // validate name value and return messages...
      },
      gender(value) {
        if (!value) {
          return "this field is required";
        }

        return true;

        // validate name value and return messages...
      },
      can_work_in_usa(value) {
        if (!value) {
          return "this field is required";
        }

        return true;

        // validate name value and return messages...
      },
      employment_status(value) {
        if (!value) {
          return "this field is required";
        }

        return true;

        // validate name value and return messages...
      },

      highest_school(value) {
        if (!value) {
          return "this field is required";
        }

        return true;

        // validate name value and return messages...
      },

      list_amjor(value) {
        if (!value) {
          return "this field is required";
        }

        return true;

        // validate name value and return messages...
      },

      hours_per_week(value) {
        if (!value) {
          return "this field is required";
        }

        return true;

        // validate name value and return messages...
      },

      learning_track(value) {
        if (!value) {
          return "this field is required";
        }

        return true;

        // validate name value and return messages...
      },

      location(value) {
        if (!value) {
          return "this field is required";
        }

        return true;

        // validate name value and return messages...
      },
      referral(value) {
        if (!value) {
          return "this field is required";
        }

        return true;

        // validate name value and return messages...
      },
      tech_experience(value) {
        if (!value) {
          return "this field is required";
        }
        return true;

        // validate name value and return messages...
      },
    };
    // Create a form context with the validation schema
    useForm({
      validationSchema: simpleSchema,
    });
    // No need to define rules for fields
    const { value: timezone, errorMessage: timezoneErr } = useField("timezone");
    const { value: phone, errorMessage: phoneErr } = useField("phone");

    const { value: representation, errorMessage: representationErr } =
      useField("representation");
    const { value: age_group, errorMessage: age_groupErr } =
      useField("age_group");
    const { value: gender, errorMessage: genderErr } = useField("gender");

    const { value: can_work_in_usa, errorMessage: can_work_in_usaErr } =
      useField("can_work_in_usa");
    const { value: employment_status, errorMessage: employment_statusErr } =
      useField("employment_status");
    const { value: highest_school, errorMessage: highest_schoolErr } =
      useField("highest_school");
    const { value: list_major, errorMessage: listmajorErr } =
      useField("list_amjor");

    const { value: hours_per_week, errorMessage: hours_per_weekErr } =
      useField("hours_per_week");
    const { value: learning_track, errorMessage: learning_trackErr } =
      useField("learning_track");

    // const { value: location, errorMessage: locationErr } = useField("location");

    const { value: referral, errorMessage: referralErr } = useField("referral");
    const { value: tech_experience, errorMessage: tech_experienceErr } =
      useField("tech_experience");
    // No need to define rules for fields

    return {
      timezone,
      timezoneErr,
      phone,
      phoneErr,
      representation,
      representationErr,
      age_group,
      age_groupErr,
      can_work_in_usa,
      can_work_in_usaErr,

      employment_status,
      employment_statusErr,
      gender,
      genderErr,
      highest_school,
      highest_schoolErr,
      list_major,
      listmajorErr,
      hours_per_week,
      hours_per_weekErr,
      learning_track,
      learning_trackErr,
      // location,
      // locationErr,
      referral,
      referralErr,
      tech_experience,
      tech_experienceErr,

      showLoading() {
        $q.loading.show({
          spinner: QSpinnerFacebook,
          spinnerColor: "primary",
          spinnerSize: 140,
          backgroundColor: "#ca7c06",
          message: "Signing you up, hold on...",
          messageColor: "black",
        });
      },
    };
  },
  data() {
    return {
      inputErr: "",
      form: {
        age_group: this.userData("age_group"),
        can_work_in_usa: this.userData("can_work_in_usa"),
        email: this.userData("email"),
        employment_status: this.userData("employment_status"),
        gender: this.userData("gender"),
        highest_school: this.userData("highest_school"),
        hours_per_week: this.userData("hours_per_week"),
        learning_track: this.userData("learning_track"),
        linkedin_url: this.userData("linkedin_url"),
        location: this.userData("location"),
      
        name: this.userData("name"),
        phone: this.userData("phone"),
        referral: this.userData("referral"),
        representation: this.userData("representation"),
        tech_experience: this.userData("tech_experience"),
        timezone: this.userData("timezone"),
      },
    };
  },
  methods: {
    userData(key) {
      return JSON.parse(localStorage.getItem("userDetails"))[key];
    },
    submit() {
      const timezone = this.timezone;
   
      const name = this.form.name;
      const email = this.form.email;
      const linkedin_url = this.form.linkedin_url;
      const learning_track = this.learning_track;
      const referral = this.referral;
      const representation = this.representation;
      const employment_status = this.employment_status;
      // const number = this.number;
      const tech_experience = this.tech_experience;
      const hours_per_week = this.hours_per_week;
      const age_group = this.age_group;
      const highest_school = this.highest_school;
      const list_major = this.list_major;

      const can_work_in_usa = this.can_work_in_usa;
      const gender = this.gender;
      const phone = this.phone;

      const formData = {
        timezone,
      
        name,
        email,
        linkedin_url,
        learning_track,
        referral,
        representation,
        employment_status,
        employment_status,
        hours_per_week,
        age_group,
        highest_school,
        list_major,
        can_work_in_usa,
        gender,
        phone,
        tech_experience,
      };
      console.log(formData);

      axios
        .put(
          `https://linkedin-signin-prototype.herokuapp.com/api/users/${this.form.email}`,
          formData
        )
        .then((resp) => {
          console.log(resp);
          this.$q.notify({
            message: "You have enrolled successfully",
            color: "primary",
            position: "top",
          });
          this.$router.replace("/");
        })
        .catch(({ response }) => {
          console.log(response);
          this.inputErr = response.data.error;
          setTimeout(() => {
            this.inputErr = "";
          }, 7000);

          this.$q.notify({
            message: response.data.error,
            color: "secondary",
            position: "top",
          });
        });
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');
p {
  margin-bottom: 4px;
}

.login-text {
  margin-top: -10px;
}
.wrapper {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding-top: 5rem; */
  max-width: 1300px;

  height: 100%;
  padding-bottom: 120px;
}
input::placeholder {
  font-size: 15px;
  opacity: 0.5;
}
.heeder {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.heeder i {
  font-size: 35px;
}

.heeder .icon {
  cursor: pointer;
}

.error {
  color: red;
}

.heeder .logo {
  object-fit: contain;
  width: 40px;
  height: 40px;
}
.heeder .logo img {
  object-fit: contain;
}
.two {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  align-items: center;
}
.form-det{
  font-family: 'Open Sans';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 34px;
/* identical to box height, or 170% */
margin-top: 10px;
align-items: center;
letter-spacing: 0.3px;

color: #000;
}
.three {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: center;
}
.icon-enroll{
  font-size: 21px;
  padding-left: 10px;
color: #746e6e;
}
.input-wrap {
  margin: 2rem 0;
}
.input-wrap,
select {
  width: 100%;
  margin-bottom: 2px;
  /* margin-top: 1.5rem; */
}

.error {
  font-size: 0.9em;
  color: #ff0000;
}

.input-wrap .input {
  /* border: 1px solid #2b945b; */
  padding: 0.75rem;

  background: rgba(236, 236, 236, 0.67);
  border: 1px solid rgba(229, 229, 229, 0.2);
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  align-items: center;
  height: 50px;
}

.input-wrap .input input,
select {
  border: none;
  padding: 0.45rem;
  background: transparent;
  color: #959292;
  width: 100%;
  cursor: pointer;
}
.input-wrap .input input:focus,
select:focus {
  outline: none;
}
.input-wrap .input .input:hover {
  border: 1px solid #2b945b;
  transition: all 0.5s ease-in-out;
}

.btn {
  border: none;
  background-color: #fff;
  padding: 14px 24px 14px 24px;

  font-size: 18px !important;
  background: #f2594b;

  color: #fff;


  width: 100%;
}

.eight h3 {
  text-align: center;
  font-size: 2rem;
  letter-spacing: 1px;
  font-weight: bold;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 16px 0;
  grid-gap: 22px;
}

.eight h3:after,
.eight h3:before {
  content: " ";
  display: block;
  border-bottom: 1px solid #ccc;
  /* background-color: #f8f8f8; */
}

.log {
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

  gap: 2rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 2.5rem auto;
}

.log .wrapp {
  display: flex;
  align-items: center;
  background: #ffffff;
  width: 100%;
  box-shadow: 18.587px 18.587px 37.1739px rgba(211, 209, 216, 0.25);
  border-radius: 28.5px;
  /* align-items: center; */
  /* justify-content: center; */
  padding: 0 1rem;
  /* margin:0 1rem ; */
}

.log .wrapp i {
  font-size: 2rem;
}
.log .wrapp img {
  width: 20px;
  height: 20px;
}

@media (max-width: 900px) {
  .three {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 500px) {
  .log .wrapp p {
    font-size: 11px;
  }

  .btn {
    width: 90%;
  }
}

.ri-facebook-box-fill {
  color: #4267b2;
}

.ri-google-fill {
  color: #fbbc05;
}

.log .wrap p {
  margin: 0 1rem;
}

.flexx {
  display: flex;
  justify-content: space-between;
}
.form-box{
  background-color: #fff;
  border-radius: 17px;
  padding: 20px;
  padding-left: 40px;
  padding-right: 40px;
}
.header-text{
  font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
font-size: 53px;
line-height: 122%;
/* identical to box height, or 65px */
text-align: center;
letter-spacing: 0.3px;

color: #121928;
}
.q-tab {
  width: 50% !important;
}
.box-par{
  background-color: #ebf5fb;
}
@media (max-width: 500px) {
  .input-wrap .input input:placeholder-shown,
  select {
    font-size: 14px;
  }
  .log {
    width: 100%;
  }
  .two {
    grid-template-columns: 1fr;
  }
  .resp {
    padding: 1rem;
    border-radius: 8px;
    font-size: 12px;
  }
}
</style>
