# Task Description

### Fix the bug

**Steps to reproduce:**

- Select first stock sybol (eg. GOOG)
- Data displays correctly
- Select the second symbol (eg. AAPL)

**Actual result:**

- Data for both symbols mixed in the table

**Expected result:**

- Only the data for the last symbol should be displayed

### Requirements:

- The WebSocket connection must not be interrupted.

### Resources:

- **Market Data API Documentation**: [Finnhub Market Data API](https://finnhub.io/docs/api/open-data)
