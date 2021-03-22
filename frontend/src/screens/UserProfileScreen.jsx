import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const UserProfileScreen = ({ match }) => {
  const [profile, setProfile] = useState();
  const [currentPassword, setCurrentPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [newPasswordConfirm, setNewPasswordConfirm] = useState();

  const { userInfo } = useSelector((state) => state.user);
  useEffect(async () => {
    const { data } = await axios.get(`/api/v1/users/${match.params.id}`, {
      user: userInfo,
    });
    setProfile(data);
  }, []);
  console.log("profile :>> ", profile);
  return !profile ? (
    "Loading"
  ) : (
    <div>
      <h4>USER PROFILE</h4>
      <Form.Row className="my-4">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={profile.name}
          onChange={(e) =>
            setProfile((prevProfile) => ({
              ...prevProfile,
              name: e.target.value,
            }))
          }
        />
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={profile.email}
          onChange={(e) =>
            setProfile((prevProfile) => ({
              ...prevProfile,
              email: e.target.value,
            }))
          }
        />
        <Button>Update Profile</Button>
      </Form.Row>
      <Form.Row className="my-4">
        <Form.Label>Current Password</Form.Label>
        <Form.Control
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <Form.Label>New Password</Form.Label>
        <Form.Control
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Form.Label>Confirm New Password</Form.Label>
        <Form.Control
          type="password"
          value={newPasswordConfirm}
          onChange={(e) => setNewPasswordConfirm(e.target.value)}
        />
        <Button>Change Password</Button>
      </Form.Row>
    </div>
  );
};

export default UserProfileScreen;

UserProfileScreen.propTypes = {
  match: PropTypes.object,
};
