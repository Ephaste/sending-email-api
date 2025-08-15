export const emailContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mobile Lab Contact</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8f9fa;
      margin: 0;
      padding: 0;
      color: #333;
    }

    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      overflow: hidden;
    }

    .header {
      background-color: #4a90e2;
      padding: 20px;
      text-align: center;
      color: #fff;
    }

    .header h1 {
      margin: 0;
      font-size: 24px;
    }

    .content {
      padding: 20px;
    }

    .content p {
      font-size: 16px;
      line-height: 1.5;
    }

    .content .button {
      display: inline-block;
      margin-top: 20px;
      padding: 12px 25px;
      background-color: #4a90e2;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
    }

    .footer {
      background-color: #f1f1f1;
      padding: 15px 20px;
      text-align: center;
      font-size: 14px;
      color: #777;
    }

    /* Mobile Responsive */
    @media (max-width: 600px) {
      .container {
        margin: 10px;
      }

      .header h1 {
        font-size: 20px;
      }

      .content p {
        font-size: 14px;
      }

      .content .button {
        padding: 10px 20px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Mobile Lab</h1>
    </div>

    <div class="content">
      <p>Hi there,</p>
      <p>Thank you for contacting Mobile Lab! We have received your message and will get back to you shortly.</p>

      <p>Here’s a summary of your submission:</p>
      <ul>
        <li><strong>Name:</strong> {{name}}</li>
        <li><strong>Email:</strong> {{email}}</li>
        <li><strong>Message:</strong> {{message}}</li>
      </ul>

      <p>In the meantime, you can explore our services or learn more about our lab.</p>

      <a href="https://mobile-lab.example.com" class="button">Visit Mobile Lab</a>
    </div>

    <div class="footer">
      &copy; 2025 Mobile Lab. All rights reserved.
    </div>
  </div>
</body>
</html>`;
