# whack-a-mole

```mermaid
flowchart LR
    A[Identify User] --> B{Known};
    B -- No --> C[Registration]
    B -- Yes --> D[Fetch User Info]
    C --> E[Join Game]
    D --> E
```
