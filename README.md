[![AFIDs](https://github.com/afids/afids-validator/blob/master/afidsvalidator/static/images/banner.png)](./static/images/banner.png)

[![](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Fafids_project)](https://twitter.com/afids_project)
[![AFIDs Validator CI](https://github.com/afids/afids-validator/actions/workflows/afids-validator_ci.yml/badge.svg)](https://github.com/afids/afids-validator/actions/workflows/afids-validator_ci.yml)
[![AFIDs Validator Release](https://github.com/afids/afids-validator/actions/workflows/afids-validator_release.yml/badge.svg)](https://github.com/afids/afids-validator/actions/workflows/afids-validator_release.yml)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/afids/afids-validator?sort=semver)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)

Anatomical fiducials (AFIDs) is an open framework for evaluating correspondence in brain images and teaching neuroanatomy using anatomical fiducial placement. The AFIDs Validator project aims to build a web application that allows the user to upload an FCSV file generated using the AFIDs protocol, and validate that it conforms to the protocol.

# [afids-validator (https://validator.afids.io)](https://validator.afids.io)

## Development
`poetry` (v1.2.0) is used to manage dependencies. To install, run the following command:

```
curl -sSL https://install.python-poetry.org | python3 - --version 1.2.0
```

For detailed setup instructions, see the documentation [here](https://python-poetry.org/).



### Required Packages
_Install via `apt-get` or `snap`_
* postgresql

### Setup for local testing
1. Git clone the afids-validator repository `git clone https://github.com/afids/afids-validator.git`
2. Set up python environment via `poetry shell`
3. Install the required libraries via `poetry install --with dev`
4. Install the pre-commit action via `poetry run poe setup`. This will automatically perform quality tasks for each new commit.
5. Access the postgres CLI via `sudo su - postgres`
6. Create a database via postgres `createdb fid_db`
7. Set password for the created database
    ```
    psql fid_db
    \password
    ```
8. Update configuration in `.env.template` and rename to `.env` file
9. `python manage.py db upgrade`
10. `python manage.py runserver`

If there are no errors, you can test it out locally at http://localhost:5000

#### Testing login

To test the login with ORCID iD:

1. Create an account (with a mailinator.com email address) on sandbox.orcid.org
2. Follow [these instructions](https://info.orcid.org/documentation/integration-guide/registering-a-public-api-client/#easy-faq-2606) to get a client ID and client secret. Set the `Redirect URIs` to your local testing address (eg. `127.0.0.1:5000`, `localhost:5000`)
3. Update your local `.env` file with your new credentials.
4. Locally change the URLs in `afidsvalidator/orcid.py` to start with api.sandbox.orcid.org
5. Run the application and test your login.
