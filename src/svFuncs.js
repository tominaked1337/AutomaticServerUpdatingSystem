// svFuncs.js



module.exports = {
  updateSrc: function ( cmd ) // DO NOT CHANGE ANYTHING HERE!
  {
    try{
      cmd.run('cd myServer');
      cmd.run('git fetch');
      cmd.run('git reset --hard');
      cmd.run('git pull --force');
      console.log("> [GIT] Updated with origin/master");
      run();
    } catch (error)
    {
      console.error("Error on 'updateSrc()'" + error);
    }
  }
}

function run () //You can change this function.
{
  cmd.run('sudo node --experimental-worker main.js > stdout.txt 2> stderr.txt &');
}
