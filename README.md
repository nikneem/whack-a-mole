# whack-a-mole

```mermaid
flowchart LR
    A[Identify User] --> B{Known};
    B -- No --> C[Registration]
    B -- Yes --> D[Fetch User Info]
    C --> E[Join Game]
    D --> E
    E --> I{Valid Voucher}
    I -- Yes --> K[Play Game]
    I -- No --> J[Show Error]
    J --> E
    E --> K[Game Stand By]
    K --> F[Play Game]
    F --> G[End Game]
    G --> H[Show Scores]
    H --> E
```
