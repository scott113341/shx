// This function takes the raw result of a shelljs command and figures out how to print it.
// Invoke this *REGARDLESS* of what the command returns, it will figure it out.
export const printCmdRet = (ret) => {
  if (!ret) return;
  if (ret.stdout) _write('stdout', ret.stdout);
  if (ret.stderr) _write('stderr', ret.stderr);
};


function _write(std, output) {
  const stds = ['stderr', 'stdout'];
  if (stds.indexOf(std) === -1) throw new Error(`Cannot write to '${std}'.`);
  process[std].write(output);
}
