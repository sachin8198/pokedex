import { Dialog, DialogContent, DialogTitle } from "@material-ui/core/";

function ModalItem({ moveNames, isOpen, moves, handleCloseModal }) {
  console.log("mm", moveNames);
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
      >
        <DialogTitle id="alert-dialog-title">
          <div className="flex items-center justify-between">
            <p className=" text-green-600">Move Names:</p>
            <button onClick={handleCloseModal}>CLOSE</button>
          </div>
        </DialogTitle>
        <DialogContent>
          <div className="w-[25vw] ">
            {moveNames.map((item, i) => (
              <div key={i}>
                {" "}
                <p className=" text-slate-900 py-2">{item}</p>{" "}
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ModalItem;
