# Link References - Portfolio Cyberpunk

This document lists all the places where you need to update links in your portfolio.

## Social Media Links

### Header.tsx
**Location:** `/components/Header.tsx`

Already configured with your links:
- **LinkedIn:** https://www.linkedin.com/in/waseem-naseeven-b66519192/
- **GitHub:** https://github.com/waseemnaseeven
- **Malt:** https://www.malt.fr/profile/waseemnaseeven
- **Twitter/X:** https://x.com/NaseevenW

---

## Projects Links

### Projects.tsx
**Location:** `/components/Projects.tsx`

You need to update the GitHub URLs for each project. Replace `project-name` with your actual repository names:

```javascript
const PROJECTS: Project[] = [
  {
    id: "001",
    title: "Microservices E-Commerce",
    githubUrl: "https://github.com/waseemnaseeven/project-name", // ⚠️ UPDATE THIS
    ...
  },
  {
    id: "002",
    title: "Infrastructure as Code AWS",
    githubUrl: "https://github.com/waseemnaseeven/project-name", // ⚠️ UPDATE THIS
    ...
  },
  {
    id: "003",
    title: "API Gateway & Service Mesh",
    githubUrl: "https://github.com/waseemnaseeven/project-name", // ⚠️ UPDATE THIS
    ...
  },
  {
    id: "004",
    title: "Multi-Cloud CI/CD Pipeline",
    githubUrl: "https://github.com/waseemnaseeven/project-name", // ⚠️ UPDATE THIS
    ...
  },
  {
    id: "005",
    title: "Monitoring & Observability Stack",
    githubUrl: "https://github.com/waseemnaseeven/project-name", // ⚠️ UPDATE THIS
    ...
  },
  {
    id: "006",
    title: "Serverless Event Processing",
    githubUrl: "https://github.com/waseemnaseeven/project-name", // ⚠️ UPDATE THIS
    ...
  },
];
```

---

## CV / Resume

### Header.tsx
**Location:** `/components/Header.tsx`

The CV button links to `/cv.pdf`. You need to:
1. Add your CV PDF file to the public folder
2. Name it `cv.pdf`
3. Place it at the root so it's accessible at `/cv.pdf`

If you want to use a different filename or location, update this line in Header.tsx:
```javascript
<a href="/cv.pdf" ...>
```

---

## Contact Email

### Contact.tsx
**Location:** `/components/Contact.tsx`

Already configured with your email:
- **Email:** waseem.naseeven@gmail.com

---

## Quick Checklist

- [x] LinkedIn link in Header
- [x] GitHub link in Header
- [x] Malt link in Header
- [x] Twitter/X link in Header
- [x] Contact email
- [ ] Update all 6 project GitHub URLs in Projects.tsx
- [ ] Add CV file to `/cv.pdf`

---

## Notes

- All social media links open in a new tab (`target="_blank"`)
- GitHub project links also open in a new tab
- The CV button is styled in orange to match the cyberpunk theme
- Contact form is currently set up for frontend only (no backend submission)
