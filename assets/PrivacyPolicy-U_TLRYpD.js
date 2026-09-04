import{t as e}from"./jsx-runtime-n5LQ9ujS.js";import{r as t,t as n}from"./index-BFJelAQe.js";import{t as r}from"./PolicyDoc-BgfSzqHX.js";var i=`# Grade Rails Privacy Policy

**Effective date:** September 3, 2026\\
**Contact:** contact@graderails.com

Grade Rails is a classroom tool for K–4 teachers, built and operated by Poorva Patel ("Grade Rails," "we"). This policy describes what information Grade Rails collects, how it is used, who can see it, how long it is kept, and how it is deleted. It is written to meet the requirements of FERPA, COPPA, and state student privacy laws such as California's SOPIPA, and to answer the questions a district's data privacy review will ask.

## 1. The short version

- Students never create accounts, log in, or interact directly with Grade Rails. Intended for teacher use.
- Student information enters Grade Rails only when a teacher or other school official enters it or uploads student work.
- Student work is processed only on infrastructure we control. No third-party AI provider ever receives student information.
- We do not sell student information, show advertising, or use student information for any purpose other than education.
- If a district leaves or requests deletion, the district receives raw data — original student work included — and an encrypted, rebuildable file for each student, to store on its own systems for free or in Grade Rails storage for a fee, in case of district return or student transfer. Identifying information is deleted from Grade Rails, and anything we keep in usable form is de-identified. Rebuilding a student's file takes the district's key and ours together; neither works alone, and lost keys cannot be regenerated.

## 2. Who Grade Rails serves and the legal basis

Grade Rails is provided to schools and their teachers for use. When a school or district uses Grade Rails, we act as a **"school official"** with a legitimate educational interest under FERPA (34 CFR 99.31(a)(1)), under the school's direct control, using student information only for the purposes the school authorizes. We will sign the Student Data Privacy Consortium's National Data Privacy Agreement (NDPA), or the district's own data privacy agreement after review, before any student information is involved.

Where COPPA applies, the school provides consent on behalf of parents for the educational use described here (**school authorization**). Grade Rails does not use student information for any commercial purpose, and parents may review or request deletion of their child's information through the school.

## 3. Information we collect

### 3a. Student information (entered by teachers)

| Category | What it is | Why |
|---|---|---|
| Identity | First name, last name, district student number, grade level | Rostering, curriculum alignment |
| Enrollment | Which classroom and subjects the student is in, and which teacher taught them, by school year | Rostering, handoff between years |
| Student work | Scans or photographs of paper assignments a teacher uploads; the teacher's grading of that work; practice questions generated for the student | Grading assistance, individualized practice, curriculum alignment |
| Attendance | Daily attendance marks, tardy and excuse notes, and any note attachments a teacher uploads | Attendance records the teacher keeps, individualized practice, curriculum alignment |
| Teacher notes | Notes a teacher writes about a student's work or progress | Teachers provide invaluable insight from the human perspective |

We do not ask for or store as fields: student dates of birth, home addresses, photographs of students, parent contact information, health, disability, or disciplinary information, or any biometric information.

Attendance notes and teacher notes are free text. They may contain whatever a teacher chooses to write, such as the reason a student was late. We use them as the teacher's own record and, after careful labeling, to personalize the student's education — for example, a note reading "Student A — loves sharks" may lead to shark-themed practice questions. Never for any other purpose.

### 3b. Teacher information

Name, school email address, username, password (stored only as a hash by our authentication provider; Grade Rails never stores a password), school and district, account settings, and a usage log of sign-ins and which screens were used. The usage log is for understanding how the product is used and for support; it never contains student information.

### 3c. Website visitors (graderails.com)

Our public website records basic visit analytics when available: page visited, referrer, browser and device type, screen size, language, timezone, IP address, and approximate location. This applies only to the public pages, never to any pages displaying real student information. Individual visit records are deleted after 12 months; we keep only aggregate counts (for example, visits per month by country or state) after that.

### 3d. Contact form

Name, email, phone, contact method preference and message you send us through the contact form, delivered to us by email.

## 4. How information is used

Student information is used only for education: grading assistance, generating individualized practice matched to each student's own work, attendance, progress reporting, and planning. Every AI-generated output (grading suggestions, practice questions, assignments) is reviewed by the teacher before it reaches a student. Nothing is graded, assigned, or sent home by AI acting without a teacher. How AI is used and overseen in Grade Rails, including the checkpoints in district AI policies such as Ohio's, is described on our [Responsible AI page](/privacy).

**Personalization.** Grade Rails uses a student's own work to build that student's practice and progress picture. This can include models tuned to an individual student's work; such a model serves only that student and is deleted with that student's data. This is the service the school asked for, and it is done for that student only.

**Helping other teachers.** What Grade Rails learns from one classroom helps the next teacher teaching the same standards: which practice questions work to move one student from their current understanding to the next standard, which misunderstandings cause students to commonly get stuck, how a skill is best sequenced. We do this only with de-identified student work. Names, student numbers, handwritten names on scans, and any link back to the student are removed first. We never share information that identifies a student, and models that serve other students are never trained on it.

We do **not**:

- sell or rent any information;
- show advertising, or use any information for advertising or marketing to students or families;
- build a profile of a student for any purpose other than education;
- disclose student information to anyone except as described in Section 5.

## 5. Who can see information

**Teachers and their school.** A teacher sees their own students. Data is fenced by row-level security so one teacher cannot read another teacher's students unless the school specifically requests and grants permission. Uploaded scans and attachments are readable by the owning teacher, by the next teacher on a school-year handoff, and by anyone else the teacher or school authorizes, including a parent request verified by the school.

**Grade Rails staff.** Only the founder has administrative access, used solely for support, security, and operating the service.

**Service providers (subprocessors).** These providers host or transmit data under our instructions and their own contractual confidentiality obligations. None of them may use the data for their own purposes.

| Provider | Role | Student information? |
|---|---|---|
| Supabase | Database, authentication, and file storage (encrypted at rest and in transit). Hosted in the United States (AWS us-west-2, Oregon) | Yes, stored |
| Modal and RunPod | GPU compute on which we run our own AI models for reading and grading student work. The models are ours; these providers supply the machines, in that order of priority | Yes, processed transiently, not retained |
| Google (Gemini API) | Generates illustrations for practice questions from a generic image description written by the teacher or Grade Rails (for example, "four ducks, two with hats") | **No.** Never receives student information or student work |
| Resend | Delivers contact-form email to us | No (contact form only) |
| ipapi.co | Approximate location for website visit analytics | No (public website only) |
| GitHub Pages | Hosts the static website files | No |

**Legal requirements.** We will disclose information if required by law, and will notify the school first unless legally prohibited.

We will not add a subprocessor that handles student information without updating this policy and notifying districts that have a data privacy agreement with us.

## 6. Security

- All data is encrypted in transit (TLS) and at rest.
- Teacher accounts require a username and password; each teacher's data is isolated by database-level row security.
- Student work is processed by models we run ourselves; it is never sent to a third-party AI provider.
- Uploaded scans and attachments live in private storage with the access rules in Section 5.
- Administrative access is limited to the founder and used only for support and operations.
- If we discover a breach affecting student information, we will notify the affected school or district within **72 hours** of discovery, with the details needed for the school to meet its own notification obligations, and will cooperate fully with the district's response.

## 7. Retention and deletion

**While a school uses Grade Rails.** Teachers need student names, so student information is held in identified form on our systems under the school's data privacy agreement.

**If a district leaves the Grade Rails platform or requests deletion.** Within 30 days:

1. The district receives unencrypted raw data — original scans and attachments we hold included — copied to the district's own systems, at no cost. The district owns it.
2. The district also receives the collapsed files: the personalized structures Grade Rails built for each student (based on practice history, curriculum alignment, grading records), compressed and encrypted, revivable only with both keys, described next. Storing them on the district's own systems is free. A district that prefers may instead leave the collapsed files in Grade Rails storage for a storage fee, through the **recommended retention window**: until each student in the file's class has aged out of K-4, plus one year. Extensions are available on request. A district that wants neither simply declines, and the encrypted files are deleted at the end of a 30-day grace period.
3. Student names, student numbers, original scans and attachments, and free-text notes are deleted by Grade Rails.
4. Grade Rails keeps de-identified material only — scans with the labeled name areas blacked out, and general structures not tied to any student, used as described in Section 4 — plus Grade Rails key, described next.

**The two keys.** Reviving a collapsed file takes two keys: the district's key, which only the district holds, and Grade Rails' key. Neither party can open a file alone — Grade Rails cannot read the files it stores or hands over, and the district cannot revive encrypted files containing Grade Rails personalization structures without asking us. 

Additional keys or security features may be added for any stored (including district-stored) encrypted personalization structures from Grade Rails, with notice or upon district request. Grade Rails recommends storing the district key in multiple secure places and keeping only as many keys as necessary: even one key loss will render all encrypted data unrecoverable.

**Period of Contractual Absence.** The district is expected to safeguard its key and, when applicable, the encrypted student files for the duration of contractual absence if intending to return to Grade Rails or support transferring students to schools using Grade Rails in the future. Once the files are locked, keys cannot be regenerated or reissued: a lost or destroyed key makes the files permanently unrecoverable, by anyone.

**Intention of return.** Each student structure file is labeled only with a token the district computes from the district-assigned student number and the district key; Grade Rails cannot turn a token back into a student, the district can. Together, the district key and the Grade Rails key act as permission to open and rebuild a student's personalization structures.

Grade Rails keeps one key per class, and destroys it — deleting any collapsed files still in Grade Rails storage with it — once every student in that class has aged out of K-4 plus one year, unless otherwise requested by the district. Until then, the key serves only two purposes. A district that returns to Grade Rails with its collapsed files and district key can have its students' structures rebuilt, modified according to the absence and current performance, and teachers can pick up where they left off. And if a student enrolls at another school that uses Grade Rails while the original school is in its Period of Contractual Absence, the original district can compute that student's token, identify the one file, and supply it with temporary access to the district key, so that student's history is brought back rather than started over; after the transfer is verified, Grade Rails relinquishes its temporary access. Neither is possible if the original district chooses to forgo safeguarding the encrypted student personalization structures built while the student attended.

**Complete deletion.** We will always follow our processes and timelines — those outlined here or updated with notice. A district that wants its files unrecoverable retains the right to destroy its own key at any time, wherever the files are stored. Nothing can then be rebuilt by anyone, and a district that later returns rebuilds students' personalization as a new district. 

| Information | Kept while | Then |
|---|---|---|
| Identified student information on Grade Rails (names, student numbers, originals, notes) | The school uses Grade Rails | Copied to the district and deleted from Grade Rails within 30 days after the district leaves or requests deletion |
| Collapsed files (unreadable by anyone without both keys; labeled by district-computed token only) | Delivered to the district; or kept in Grade Rails storage for a fee through the recommended retention window, at the district's option | Deleted from Grade Rails storage when the district's option ends, 30 days after the district declines them, or when every student in the class has aged out of K-4 plus one year (extensions are available on district request) |
| Grade Rails' key (one per class) | Until every student in that class has aged out of K-4 plus one year (extensions on district request) | Destroyed. A district can make its files unrecoverable sooner by destroying its own key |
| De-identified material (redacted scans, general structures; no student link) | Retained | Used only as described in Section 4 |
| Teacher account (name, email, settings) | The teacher's account is active | Deleted within 30 days of the teacher's or school's request |
| Teacher usage log (individual entries) | 12 months | Deleted; aggregate usage counts kept |
| Website visit records (individual visits) | 12 months | Deleted; aggregate visit counts kept |
| Contact-form messages | Until the inquiry is resolved | Deleted within 12 months of receipt |

**Deletion on request.** A school, district, or teacher may request deletion of any student's information, a whole class, or all of the school's data at any time by emailing contact@graderails.com. Requests are acknowledged in writing within **3 business days**, completed within **30 days** of receipt, and deletion is confirmed in writing. A teacher removing a student from a roster inside the app is not deletion; deletion happens on request as above.

**Backups.** Our database provider keeps encrypted backups for disaster recovery. Deleted data leaves those backups on their normal rotation, within **30 days** of deletion, and backups are never used to restore data that was deleted on request.

**Transient processing.** When our AI models read or grade a scan, the image is processed in memory on machines we control and is not retained by the compute provider after the request completes.

We keep a log of deletion requests and their completion dates so that a district can verify we honored its requests.

## 8. Parent and student rights

Parents and legal guardians may review, correct, or request deletion of their child's information through their school. Grade Rails will act on any such request forwarded by the school within 30 days. Parents may also contact us directly at contact@graderails.com and we will coordinate with the school.

## 9. Changes to this policy

If this policy changes in a way that affects student information, we will notify districts with a data privacy agreement in advance and post the updated policy here with a new effective date. We will not make changes that reduce the protection of student information already collected without the district's agreement.

## 10. Contact

Poorva Patel, Founder, Grade Rails\\
poorva@graderails.com
`,a=e();function o(){return n(`PrivacyPolicy`),(0,a.jsxs)(`div`,{className:`info-page`,children:[(0,a.jsx)(t,{}),(0,a.jsx)(`div`,{className:`info-card info-card-wide`,children:(0,a.jsx)(r,{source:i})})]})}export{o as default};