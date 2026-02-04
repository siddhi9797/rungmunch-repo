import React, { useState } from "react";


function Registration()
{
    const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [mobile, setMobile] = useState("");
  const [contactPreference, setContactPreference] = useState([]);
  const [category, setCategory] = useState("");
  const [style, setStyle] = useState("");
  const [participantsCount, setParticipantsCount] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [state, setState] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const stylesByCategory = {
    "Solo Singing": ["Classical", "Semi-Classical", "Bollywood"],
    "Group Singing": ["Classical", "Bollywood"],
    "Instrumental": ["Tabla", "Harmonium", "Flute"],
  };

  const handleContactChange = (value) => {
    setContactPreference((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const data = {
      firstName,
      lastName,
      birthMonth,
      birthYear,
      email,
      country,
      mobile,
      contactPreference,
      category,
      style,
      participantsCount,
      ageGroup,
      address,
      city,
      zip,
      state,
      gender,
      password,
    };

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      alert(result.message);
    } catch {
      alert("Registration failed");
    }
  };
  return (
    <>
      <h2 className="modal-title">Registration Form</h2>

      <form className="registration-form" onSubmit={handleRegister}>

        {/* Essential Information */}
        <h3 className="form-subtitle">Essential Information</h3>

        <div className="form-row">
          <input
            type="text"
            placeholder="First Name *"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Last Name *"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="form-row">
          <select required value={birthMonth} onChange={(e) => setBirthMonth(e.target.value)}>
            <option value="">Month of Birth *</option>
            <option>January</option>
            <option>February</option>
            <option>March</option>
          </select>

          <select required value={birthYear} onChange={(e) => setBirthYear(e.target.value)}>
            <option value="">Year of Birth *</option>
            <option>2000</option>
            <option>2001</option>
            <option>2002</option>
          </select>
        </div>

        <div className="form-row">
          <input
            type="email"
            placeholder="Email *"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <select required value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="">Country *</option>
            <option>India</option>
            <option>USA</option>
          </select>
        </div>

        <div className="form-row">
          <input
            type="tel"
            placeholder="Mobile Number *"
            required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>

        <div className="form-row checkbox-row">
          <label>Preferred Contact *</label>

          <label>
            <input
              type="checkbox"
              checked={contactPreference.includes("SMS")}
              onChange={() => handleContactChange("SMS")}
            />
            Use SMS / Text
          </label>

          <label>
            <input
              type="checkbox"
              checked={contactPreference.includes("WhatsApp")}
              onChange={() => handleContactChange("WhatsApp")}
            />
            Use WhatsApp
          </label>
        </div>

        {/* Participation Details */}
        <h3 className="form-subtitle">Participation Details</h3>

        <div className="form-row">
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setStyle("");
            }}
            required
          >
            <option value="">Category *</option>
            <option>Solo Singing</option>
            <option>Group Singing</option>
            <option>Instrumental</option>
          </select>

          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            required
            disabled={!category}
          >
            <option value="">Style *</option>
            {category &&
              stylesByCategory[category]?.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))
            }
          </select>
        </div>

        <div className="form-row">
          <select required value={participantsCount} onChange={(e) => setParticipantsCount(e.target.value)}>
            <option value="">No. of Participants *</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>

          <select required value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)}>
            <option value="">Age Group *</option>
            <option>Under 12</option>
            <option>12–18</option>
            <option>18+</option>
          </select>
        </div>

        {/* More Details */}
        <h3 className="form-subtitle">More Details</h3>

        <textarea
          placeholder="Address *"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <div className="form-row">
          <input type="text" placeholder="City *" required value={city} onChange={(e) => setCity(e.target.value)} />
          <input type="text" placeholder="Zip / Pin *" required value={zip} onChange={(e) => setZip(e.target.value)} />
        </div>

        <div className="form-row">
          <input type="text" placeholder="State *" required value={state} onChange={(e) => setState(e.target.value)} />
        </div>

        <div className="form-row radio-row">
          <label>Gender *</label>

          <label>
            <input type="radio" name="gender" value="Male" checked={gender === "Male"} onChange={(e) => setGender(e.target.value)} />
            Male
          </label>

          <label>
            <input type="radio" name="gender" value="Female" checked={gender === "Female"} onChange={(e) => setGender(e.target.value)} />
            Female
          </label>

          <label>
            <input type="radio" name="gender" value="Other" checked={gender === "Other"} onChange={(e) => setGender(e.target.value)} />
            Other
          </label>
        </div>

        <div className="form-row">
          <input type="password" placeholder="Enter Password *" required value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="password" placeholder="Re-enter Password *" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>

        <button type="submit" className="register-btn">Register</button>
      </form>
    </>
  );
}

export default Registration;
