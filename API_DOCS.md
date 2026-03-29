# API Documentation

## Base URL
- **Development**: `http://localhost:5000`
- **Production**: `https://your-domain.com`

## Authentication
Currently no authentication. Add JWT/API keys for production.

## Endpoints

### Contact Endpoints

#### POST /contact
Submit a new contact message.

**Request**
```http
POST /contact HTTP/1.1
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I would like to discuss a potential project..."
}
```

**Response** (201 Created)
```json
{
  "success": true,
  "message": "Message received! I'll get back to you soon.",
  "data": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Error Response** (400 Bad Request)
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": {
    "email": "Please provide a valid email",
    "message": "Message must be at least 10 characters"
  }
}
```

**Validation Rules**
- `name`: 2-100 characters, required
- `email`: Valid email format, required
- `subject`: 3-200 characters, required
- `message`: 10-5000 characters, required

#### GET /contact
Retrieve all contact messages. **Admin only - requires authentication.**

**Request**
```http
GET /contact HTTP/1.1
```

**Response** (200 OK)
```json
{
  "success": true,
  "count": 5,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      "email": "john@example.com",
      "subject": "Project Inquiry",
      "message": "I would like to discuss...",
      "read": false,
      "archived": false,
      "createdAt": "2024-02-21T10:30:00Z",
      "updatedAt": "2024-02-21T10:30:00Z"
    }
  ]
}
```

### Health Check

#### GET /health
Check server status.

**Request**
```http
GET /health HTTP/1.1
```

**Response** (200 OK)
```json
{
  "status": "OK",
  "timestamp": "2024-02-21T10:30:00.000Z"
}
```

## Error Codes

| Code | Message | Cause |
|------|---------|-------|
| 201 | Success | Contact created |
| 200 | Success | Request successful |
| 400 | Validation failed | Invalid input data |
| 404 | Route not found | Endpoint doesn't exist |
| 500 | Internal server error | Server error - check logs |

## Rate Limiting

**Recommended for production**:
- 5 requests per minute per IP for contact endpoint
- 100 requests per hour per IP for general endpoints

## CORS Headers

Allowed origins:
- Development: `http://localhost:5173`
- Production: `https://yashkumarsharma.com` (configure in .env)

## Content Types

- **Request**: `application/json`
- **Response**: `application/json`

## Best Practices

1. **Input Validation**
   - Always validate input on frontend before sending
   - Server performs secondary validation

2. **Error Handling**
   - Check `success` field in response
   - Display user-friendly error messages
   - Log errors for debugging

3. **Performance**
   - Implement request debouncing on frontend
   - Use timeout for requests (10 seconds)
   - Cache responses when appropriate

## Example Usage (Frontend)

```javascript
// Using axios
import axios from 'axios'

const submitContactForm = async (formData) => {
  try {
    const response = await axios.post('http://localhost:5000/contact', {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    })
    
    console.log('Success:', response.data.message)
    // Clear form
  } catch (error) {
    console.error('Error:', error.response?.data?.message)
    // Show error to user
  }
}
```

## Webhook Integration (Future)

For email notifications, add webhook to:
- SendGrid
- Mailgun
- Custom email service

Configure in backend `.env`:
```
WEBHOOK_URL=https://your-webhook.com/contact
```

## API Version

- Current Version: `1.0`
- No versioning prefix yet (i.e., `/contact` not `/v1/contact`)

## Future Enhancements

- [ ] Authentication & Authorization
- [ ] Rate limiting middleware
- [ ] Request logging
- [ ] Email notifications
- [ ] Admin dashboard API
- [ ] Pagination for GET /contact
- [ ] Search & filtering
- [ ] Data export functionality

---

**Last Updated**: February 2024
**Status**: ✅ Production Ready
