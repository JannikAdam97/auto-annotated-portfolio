---
type: PageLayout
title: Home
slug: index
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/bg5.png
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 75
sections:
  - type: HeroSection
    colors: colors-f
    backgroundSize: full
    text: |+
      # Hello, my name is Jannik.
      # I'm a Technical Consultant and Developer.
      ### Nice to meet you.
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-24
          - pb-8
          - pl-4
          - pr-4
        flexDirection: row-reverse
        textAlign: left
  - type: CtaSection
    actions:
      - type: Button
        label: Book a call
        url: https://outlook.office.com/bookwithme/user/134da9ab1ad04877befb74c452e20eb9@cloudbuds.de/meetingtype/xsVMpKpCNUinqor4MNmofw2?anonymous&ismsaljsauthenabled&ep=mlink
        style: secondary
    colors: colors-f
    backgroundSize: full
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-4
          - pb-4
          - pl-4
          - pr-4
        flexDirection: row
        textAlign: left
  - type: ContactSection
    colors: colors-f
    backgroundSize: full
    title: Got an interesting project?
    form:
      type: FormBlock
      elementId: contact
      fields:
        - type: TextFormControl
          name: firstname
          label: First Name
          hideLabel: true
          placeholder: First Name *
          isRequired: true
          width: 1/2
        - type: TextFormControl
          name: lastname
          label: Last Name
          hideLabel: true
          placeholder: Last Name *
          isRequired: false
          width: 1/2
        - type: EmailFormControl
          name: email
          label: Email
          hideLabel: true
          placeholder: Email *
          isRequired: true
          width: 1/2
        - type: TextFormControl
          name: company
          label: Company, Organization, Institution
          hideLabel: true
          placeholder: Company, Organization, Institution
          width: 1/2
        - type: TextareaFormControl
          name: message
          label: Message
          hideLabel: false
          placeholder: Tell me more... 💬
          width: full
          isRequired: false
      submitLabel: "Submit \U0001F680"
      styles:
        self:
          textAlign: center
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-24
          - pb-4
          - pr-4
          - pl-4
        flexDirection: row
        textAlign: left
  - type: CtaSection
    text: By submitting this form I accept the [Privacy Policy](/privacy).
    styles:
      self:
        height: auto
        width: narrow
        flexDirection: row
        textAlign: left
---
