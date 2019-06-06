import React from 'react';
import { Button, Card } from "antd";
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Card>
      <h1>Question Not Found</h1>
      <Button type="primary"><Link to="/dashboard">Return to Dashboard</Link></Button>
    </Card>
  )
}

export default NotFound;