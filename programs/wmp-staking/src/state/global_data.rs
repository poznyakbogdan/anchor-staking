use std::mem::size_of;
use anchor_lang::prelude::*;

pub const GLOBAL_DATA_SIZE: usize = size_of::<GlobalData>() + 8;
pub const GLOBAL_DATA_PREFIX: &str = "global-data";

#[account]
pub struct GlobalData {
    pub bump: u8,
    pub id: i64
}