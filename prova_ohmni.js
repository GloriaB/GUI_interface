
const { exec } = require("child_process");

//exec("ls -la", (error, stdout, stderr) => {
exec("docker run -it --network host --privileged -v /dev:/dev c6a4b4bc1a1e", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});



