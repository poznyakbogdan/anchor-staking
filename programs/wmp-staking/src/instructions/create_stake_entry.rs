use anchor_lang::{prelude::Context, solana_program::entrypoint::ProgramResult, Accounts};

pub fn handler(ctx: Context<CreateStakeEntry>) -> ProgramResult {
    
    Ok(())
}

#[derive(Accounts)]
pub struct CreateStakeEntry {

}