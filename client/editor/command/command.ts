
/** Any actionable change in the editor that results in a change to the model is handled by a command.*/
export abstract class Command{
	/** Primary operation of this commamnd */
	abstract execute():void;
	/** Undoes the primary operation of this command */
	abstract unExecute():void;
	/** Returns a user friendly name that identifies this command */
	abstract getName():string;

}

/** Holds several commands that will run in one go. */
export class CompositeCommand extends Command{
	protected commandList:Command[]=[];

	execute():void{
		for(let command of this.commandList){
			command.execute();
		}
	}

	unExecute():void{
		for(let command of this.commandList){
			command.unExecute();
		}
	}

	/** Subclasses should override to return a more descriptive user friendly name*/
	getName():string{
		return "Composite Command";
	}
}