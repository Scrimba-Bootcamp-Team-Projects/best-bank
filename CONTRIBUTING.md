### First time contributing? Do this:
1. Browse to the project GitHub repository URL: <https://github.com/Scrimba-Bootcamp-Team-Projects/best-bank>
2. Fork it to your GitHub account.
3. Go to your GitHub account and find your forked repository of the project.
4. There copy the link to the forked repository.
5. In your local environment, clone the forked repository using the link you just copied.
<pre>
git clone https://github.com/your-user-name-here/best-bank
</pre>
6. Add a remote to the **upstream**, i.e. original repository of the project so that you can get the latest changes 
   in its **main** branch before you start working on a change.
<pre>
git remote add upstream https://github.com/Scrimba-Bootcamp-Team-Projects/best-bank
</pre>
7. Now when you enter `git remote -v`, you should see 4 lines, 2 for your forked `origin` remote, and 2 for the `upstream` 
   remote.
8. To make a change, either pick an issue from the `Issues` list on the project's GitHub repository to 
   implement/fix/resolve, or decide to work on something that is not in the list. If you want to work on something 
   that is not in the list, first make sure it's not in the list, and create an issue for it in the list. 
9. Checkout a new branch off of your `main` branch to start working on the change.
<pre>
git checkout -b your-feature-branch-name
</pre>
9. Make your changes in the new branch.
10. When ready, `add`, `commit`, and then `push` the new branch to your forked, i.e. `origin` remote. If the changes 
    are to fix or resolve an issue already in the `Issues` in the project's GitHub repository page, start your 
    commit message with the issue number. For example, if you are working on an issue titled: `Add an image to the page 
    #8`, (notice the **#8** at the end), your 
    `add` and then 
    `commit` commands would look something like this:
<pre>
git add .
git commit -m "[#8] Add an image to the page"
</pre>
**Why add the issue number at the beginning?** Because the pull request you will soon create, or **PR**, 
    will be 
    titled the same as the commit. And as such, GitHub will automatically **link** your PR to that issue, **#8**, 
becuase **#8** is included in the PR title.
11. Now push the change to your `origin` remote:
<pre>
git push --set-upstream origin your-feature-branch-name
</pre>
12. Go back to the forked repository on your GitHub account, and you should now see a `Compare & pull request` 
    button at the top. Click on it.
13. A PR page should appear. In it you could add further details about the PR. When ready, click on `Create pull 
    request`. That's it.
14. A maintainer of the project will take a look at your PR, and if all looks good, will accept the request and merge 
    your change(s) to the 
    `main` branch and close the PR. 
15. When you see the changes got marged and the PR got closed, you can delete the local change branch you created 
    for working on the change, using:
<pre>
git branch -d your-feature-branch-name
</pre>
And you can also delete the branch from your forked repository, using:
<pre>
git push origin -d your-feature-branch-name
</pre>

### For consecutive contributions:
1. Pull from the `upstream` remote `main` branch to make sure you have the latest and greatest:
<pre>
git pull upstream main
</pre>
2. Push the changes you just got merged into your local `main` branch up to your forked `origin` remote `main` branch.
<pre>
git push origin main
</pre>
3. Continue from **item #8** from the list above.