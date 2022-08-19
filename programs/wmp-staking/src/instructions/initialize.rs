use anchor_lang::{prelude::Context, solana_program::entrypoint::ProgramResult, Accounts};

pub fn handler(ctx: Context<Initialize>) -> ProgramResult {
    
    Ok(())
}

#[derive(Accounts)]
pub struct Initialize {

}