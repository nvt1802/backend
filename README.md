"# backend" 

"# account api"

GET
description: api get all account
path: /examsimulator/account
query: username, durationStartDate, durationEndDate, role
example: /examsimulator/account?username=VPH&durationStartDate=1990/01/01&durationEndDate=2022/12/31 17:00:00.00&role=1

GET
description: api get account by id
path: /examsimulator/account/:accountId
query: username, durationStartDate, durationEndDate, role
example: /examsimulator/account/abbaa0fb-49d9-4682-9f38-9e1ae5aed722