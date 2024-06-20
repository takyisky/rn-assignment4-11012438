# rn-assignment4-11012438
DCIT 202 Assignment 4

## Introduction

Job Finder App is a React Native application to help users search for jobs. It shows featured and popular job listings, and allows users to filter their search.

## Components

### HomeScreen

**Description**: Displays the user's profile, a search bar, and lists of featured and popular job cards.

**Props**:
- `route`: Contains the `name` and `email` of the user.

**Usage**:
```jsx
import HomeScreen from './screens/HomeScreen';

### JobCard

**Description**: Shows details of a popular job including logo, title, company, salary, and location.

**Props**:
-'logoPath': Path to the company logo image.
-'jobTitle': Title of the job.
-'companyName': Name of the company.
-'salary': Salary for the position.
-'location': Job location.

